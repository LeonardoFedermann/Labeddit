import React, { useEffect, useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { goToLogin, goBack, goToPostPage } from '../coordinator/Coordinator'
import { useForm } from '../custom hooks and functions/useForm'
import logout from '../custom hooks and functions/logout'
import { 
    FeedAndPostContainer, 
    PostsContainer, 
    CreatePostForm, 
    SearchForm, 
    StyledTextField, 
    FeedFormsContainer, 
    ShowAndHideButton, 
    ShowAndHideButtonContainer 
} from '../style/style'
import Header from '../components/Header'
import Post from '../components/Post'
import Loading from '../components/Loading'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import likeIconFilled from '../images/favorite.svg'
import likeIcon from '../images/favorite-white.svg'
import { BASE_URL } from '../base-url/base-url'
import { votePost } from '../functions/votePost'

export default function FeedPage() {
    const history = useHistory()
    const token = window.localStorage.getItem('token')
    const headers = { Authorization: token }
    const [posts, setPosts] = useState([])
    const [renderedPosts, setRenderedPosts] = useState([])
    const [showFields, setShowFields] = useState(false)
    const [form, setForm, handleValues, resetForm] = useForm({ title: '', text: '', search: '' })
    const [language, setLanguage, menu, setMenu] = useContext(LanguageContext)

    useEffect(() => {
        document.title = languages[language].feed
    }, [language])

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            goToLogin(history)
        }
    }, [history])

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        setRenderedPosts(posts)
    }, [posts])

    useEffect(() => {
        searchPost()
    }, [form.search])

    const getPosts = async () => {
        try {
            const listOfPosts = await axios.get(`${BASE_URL}posts`, { headers })
            console.log(listOfPosts.data)
            setPosts(listOfPosts.data)
        } catch (error) {
            alert(languages[language].errorMessage)
            console.log(error)
        }
    }

    const createPost = async (e) => {
        e.preventDefault()
        const newPost = {
            body: form.text,
            title: form.title
        }
        try {
            await axios.post(`${BASE_URL}posts`, newPost, { headers })
            getPosts()
            resetForm()
        } catch (error) {
            alert(languages[language].errorMessage)
        }
    }

    const searchPost = () => {
        if (form.search) {
            let newPostsList = posts.filter((post) => {
                return (post.title.toLowerCase().includes(form.search.toLowerCase()) || post.username.toLowerCase().includes(form.search.toLowerCase()) || post.text.toLowerCase().includes(form.search.toLowerCase()))
            })
            setRenderedPosts(newPostsList)
        } else {
            setRenderedPosts(posts)
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
            {!posts[0] ?
                <Loading /> :
                <>
                    <ShowAndHideButtonContainer>
                        <ShowAndHideButton
                            onClick={() => setShowFields(!showFields)}
                            color="primary"
                            variant="contained"
                        >
                            {showFields ? languages[language].hide : languages[language].show} {languages[language].fieldToShowOrHide}
                        </ShowAndHideButton>
                    </ShowAndHideButtonContainer>
                    { !showFields ?
                        <div></div> :
                        <FeedFormsContainer>
                            <CreatePostForm onSubmit={createPost}>
                                <h3>{languages[language].createYourPost}</h3>
                                <StyledTextField
                                    label={languages[language].title}
                                    value={form.title}
                                    name="title"
                                    onChange={handleValues}
                                    type="text"
                                    required
                                    inputProps={{ pattern: '^.{1,100}$', title: languages[language].titlePattern }}
                                />
                                <StyledTextField
                                    label={languages[language].postText}
                                    value={form.text}
                                    name="text"
                                    onChange={handleValues}
                                    type="text"
                                    required
                                />
                                <Button
                                    type="submit"
                                    color="primary"
                                    variant="contained"
                                >
                                    {languages[language].createPost}
                                </Button>
                            </CreatePostForm>
                            <SearchForm>
                                <h3>{languages[language].searchAPost}</h3>
                                <StyledTextField
                                    label={languages[language].search}
                                    value={form.search}
                                    name="search"
                                    onChange={handleValues}
                                    type="text"
                                />
                            </SearchForm>
                        </FeedFormsContainer>
                    }
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
                </>
            }
        </FeedAndPostContainer>
    )
}
