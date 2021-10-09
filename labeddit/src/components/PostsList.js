import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { goToPostPage } from '../coordinator/Coordinator'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import { PostsContainer } from '../style/style'
import Post from '../components/Post'
import { votePost } from '../functions/votePost'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'

export default function PostsList(props) {
    const history = useHistory()
    const [language, setLanguage] = useContext(LanguageContext)
    const { renderedPosts, setRenderedPosts } = props

    return (
        <PostsContainer>
            {!renderedPosts[0] ?
                <h3>{languages[language].searchCorrespondence}</h3> :
                <>
                    {renderedPosts && renderedPosts.map((post) => {
                        return <Post
                            key={post.id}
                            title={post.title}
                            userName={post.username}
                            text={post.body}
                            positiveVote={() => votePost(
                                post.id,
                                post.userVote,
                                1,
                                language,
                                languages,
                                renderedPosts,
                                setRenderedPosts,
                                true
                            )}
                            negativeVote={() => votePost(
                                post.id,
                                post.userVote,
                                -1,
                                language,
                                languages,
                                renderedPosts,
                                setRenderedPosts,
                                true
                            )}
                            numberOfPositiveVotes={post.voteSum ? post.voteSum : 0}
                            likeIcon={post.userVote === 1 ? likeIconFilled : likeIcon}
                            deslikeColor={post.userVote === -1 ? 'black' : 'white'}
                            numberOfComments={post.commentCount ? post.commentCount : 0}
                            checkDetails={() => goToPostPage(history, post.id)}
                        />
                    })}
                </>}
        </PostsContainer>
    )
}