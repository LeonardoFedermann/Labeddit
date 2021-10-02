import React, { useState, useEffect, useContext } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import axios from 'axios'
import { FeedAndPostContainer, CommentsContainer, CreateCommentField, CreateCommentForm } from '../style/style'
import { useForm } from '../custom hooks and functions/useForm'
import Header from '../components/Header'
import Post from '../components/Post'
import Loading from '../components/Loading'
import Comment from '../components/Comment'
import Button from '@material-ui/core/Button'
import { goBack } from '../coordinator/Coordinator'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'
import logout from '../custom hooks and functions/logout'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import { BASE_URL } from '../base-url/base-url'
import {votePost} from '../functions/votePost'

export default function PostPage() {
    const history = useHistory()
    const pathParams = useParams()
    const token = window.localStorage.getItem('token')
    const headers = { Authorization: token }
    const [post, setPost] = useState({})
    const [comments, setComments] = useState([])
    const [seeComments, setSeeComments] = useState(false)
    const [form, setForm, handleValues, resetForm] = useForm({ text: '' })
    const [language, setLanguage, menu, setMenu] = useContext(LanguageContext)

    useEffect(() => {
        document.title = `${languages[language].postDetails}: ${post.title ? post.title : ''}`
    }, [language, post.title])

    useEffect(() => {
        getPostDetails(pathParams.postId)
        getPostComments(pathParams.postId)
    }, [pathParams.postId])

    const getPostComments = async (id) => {
        try {
            const postComments = await axios.get(`${BASE_URL}posts/${id}/comments`, { headers })
            const newListOfComments = postComments.data.filter((comment) => {
                return typeof comment.body === 'string'
            })
            setComments(newListOfComments)
        } catch (error) {
            alert(languages[language].errorMessage)
        }
    }

    const getPostDetails = async (id) => {
        try {
            const listOfPosts = await axios.get(`${BASE_URL}posts`, { headers })
            const displayedPost = listOfPosts.data.find(post => {
                return post.id === id
            })
            setPost(displayedPost)
        } catch (error) {
            alert(languages[language].errorMessage)
        }
    }

    const voteComment = async (id, currentDirection, direction) => {
        let correctedDirection
        if (currentDirection === direction) {
            correctedDirection = 0
        } else {
            correctedDirection = direction
        }
        const body = {
            direction: correctedDirection
        }
        try {
            await axios.put(`${BASE_URL}posts/${pathParams.postId}/comments/${id}/votes`, body, {
                headers: {
                    Authorization: token,
                }
            })
            let newCommentsInfo = [...post.comments]
            newCommentsInfo.forEach((post) => {
                if (post.id === id) {
                    post.userVoteDirection = correctedDirection
                    if (correctedDirection > 0 || currentDirection === -1) {
                        currentDirection - direction === 2 || currentDirection - direction === -2 ?
                            post.votesCount += 2 :
                            post.votesCount += 1
                    } else {
                        currentDirection - direction === 2 || currentDirection - direction === -2 ?
                            post.votesCount -= 2 :
                            post.votesCount -= 1
                    }
                }
            })
            setPost({ ...post, comments: newCommentsInfo })
        } catch (error) {
            alert(languages[language].errorMessage)
        }
    }

    const createComment = async (e) => {
        e.preventDefault()
        try {
            const newComment = {
                body: form.text
            }
            await axios.post(`${BASE_URL}posts/${pathParams.postId}/comments`, newComment, { headers })
            getPostComments(pathParams.postId)
            resetForm()
        } catch (error) {
            alert(languages[language].errorMessage)
        }
    }

    return (
        <FeedAndPostContainer>
            <LanguagesMenu />
            <Header>
                <p onClick={() => goBack(history)}>{languages[language].goBack}</p>
                <p onClick={() => setMenu(true)}>{languages[language].changeLanguage}</p>
                <p onClick={() => logout(history)}>{languages[language].logout}</p>
            </Header>
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
                        {seeComments ?
                            <>
                                <CreateCommentForm onSubmit={createComment}>
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
                                {console.log(comments)}
                                {comments.map((comment) => {
                                    return <Comment
                                        key={comment.id}
                                        userName={comment.username}
                                        text={comment.body}
                                        positiveVote={() => voteComment(comment.id, comment.userVote, 1)}
                                        negativeVote={() => voteComment(comment.id, comment.userVote, -1)}
                                        numberOfVotes={comment.voteSum ? comment.voteSum : 0}
                                        likeIcon={comment.userVote === 1 ? likeIconFilled : likeIcon}
                                        deslikeColor={comment.userVote === -1 ? 'black' : 'white'}
                                    />
                                })}
                            </>
                            :
                            <div></div>
                        }
                    </CommentsContainer>
                </>
            }
        </FeedAndPostContainer>
    )
}