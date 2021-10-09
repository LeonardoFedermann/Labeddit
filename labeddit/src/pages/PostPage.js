import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { FeedAndPostContainer, CommentsContainer, CreateCommentField, CreateCommentForm } from '../style/style'
import { useForm } from '../custom_hooks/useForm'
import { useProtectedPage } from '../custom_hooks/useProtectedPage'
import { useSetDocumentTitle } from '../custom_hooks/useSetDocumentTitle'
import Header from '../components/Header'
import Post from '../components/Post'
import Loading from '../components/Loading'
import Comment from '../components/Comment'
import Button from '@material-ui/core/Button'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import { votePost } from '../functions/votePost'
import { voteComment } from '../functions/voteComment'
import { getPostDetails } from '../functions/getPostDetails'
import { getPostComments } from '../functions/getPostComments'
import { createComment } from '../functions/createComment'

export default function PostPage() {
    const pathParams = useParams()
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [seeComments, setSeeComments] = useState(false)
    const [form, setForm, handleValues, resetForm] = useForm({ text: '' })
    const [language, setLanguage] = useContext(LanguageContext)

    useSetDocumentTitle(`${languages[language].postDetails}: ${post.title ? post.title : ''}`)
    useProtectedPage()

    useEffect(() => {
        getPostDetails(pathParams.postId, setPost, languages, language)
        getPostComments(pathParams.postId, setComments, languages, language)
    }, [pathParams.postId])

    const createNewComment = (e) => {
        e.preventDefault()
        createComment(form.text, post, setComments, setPost, resetForm, languages, language)
    }

    return (
        <FeedAndPostContainer>
            <LanguagesMenu />
            <Header />
            { !post.title ?
                <Loading /> :
                <>
                    <Post
                        title={post.title}
                        userName={post.username}
                        text={post.body}
                        positiveVote={() => votePost(
                            post.id,
                            post.userVote,
                            1,
                            language,
                            languages,
                            post,
                            setPost,
                            false
                        )}
                        negativeVote={() => votePost(
                            post.id,
                            post.userVote,
                            -1,
                            language,
                            languages,
                            post,
                            setPost,
                            false
                        )}
                        numberOfPositiveVotes={post.voteSum ? post.voteSum : 0}
                        likeIcon={post.userVote === 1 ? likeIconFilled : likeIcon}
                        deslikeColor={post.userVote === -1 ? 'black' : 'white'}
                        numberOfComments={post.commentCount ? post.commentCount : 0}
                        checkDetails={() => setSeeComments(!seeComments)}
                    />
                    <CommentsContainer>
                        {seeComments &&
                            <>
                                <CreateCommentForm onSubmit={createNewComment}>
                                    <CreateCommentField
                                        label={languages[language].commentFieldLabel}
                                        value={form.text}
                                        name="text"
                                        onChange={handleValues}
                                        type="text"
                                        required
                                    />
                                    <Button
                                        type="submit"
                                        size="small"
                                        color="primary"
                                        variant="contained"
                                    >
                                        {languages[language].commentButton}
                                    </Button>
                                </CreateCommentForm>
                                {comments && comments.map((comment) => {
                                    return <Comment
                                        key={comment.id}
                                        userName={comment.username}
                                        text={comment.body}
                                        positiveVote={() => voteComment(
                                            comment.id,
                                            pathParams.postId,
                                            comment.userVote,
                                            1,
                                            comments,
                                            setComments,
                                            languages,
                                            language
                                        )}
                                        negativeVote={() => voteComment(
                                            comment.id,
                                            pathParams.postId,
                                            comment.userVote,
                                            -1,
                                            comments,
                                            setComments,
                                            languages,
                                            language
                                        )}
                                        numberOfVotes={comment.voteSum ? comment.voteSum : 0}
                                        likeIcon={comment.userVote === 1 ? likeIconFilled : likeIcon}
                                        deslikeColor={comment.userVote === -1 ? 'black' : 'white'}
                                    />
                                })}
                            </>
                        }
                    </CommentsContainer>
                </>
            }
        </FeedAndPostContainer>
    )
}