import React, { useState, useContext } from 'react'
import { useForm } from '../custom_hooks/useForm'
import { useProtectedPage } from '../custom_hooks/useProtectedPage'
import { useSetDocumentTitle } from '../custom_hooks/useSetDocumentTitle'
import { useGetPosts } from '../custom_hooks/useGetPosts'
import { useSetRenderedPosts } from '../custom_hooks/useSetRenderedPosts'
import { useSearchPost } from '../custom_hooks/useSearchPost'
import { FeedAndPostContainer, ShowAndHideButton, ShowAndHideButtonContainer } from '../style/style'
import Header from '../components/Header'
import Loading from '../components/Loading'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import { createPost } from '../functions/createPost'
import FeedForms from '../components/FeedForms'
import PostsList from '../components/PostsList'

export default function FeedPage() {
    const [posts, setPosts] = useState([])
    const [renderedPosts, setRenderedPosts] = useState([])
    const [showFields, setShowFields] = useState(false)
    const [form, setForm, handleValues, resetForm] = useForm({ title: '', text: '', search: '' })
    const [language, setLanguage] = useContext(LanguageContext)

    useSetDocumentTitle(languages[language].feed)
    useProtectedPage()
    useGetPosts(setPosts, languages, language)
    useSetRenderedPosts(setRenderedPosts, posts)
    useSearchPost(form.search, posts, setRenderedPosts)

    const createNewPost = (e) => {
        e.preventDefault()
        createPost(form.text, form.title, setPosts, resetForm, languages, language)
    }

    return (
        <FeedAndPostContainer>
            <LanguagesMenu />
            <Header />
            {!posts[0] ?
                <Loading /> :
                <>
                    <ShowAndHideButtonContainer>
                        <ShowAndHideButton
                            onClick={() => setShowFields(!showFields)}
                            color="primary"
                            variant="contained"
                        >
                            {showFields ?
                                languages[language].hide :
                                languages[language].show} {languages[language].fieldToShowOrHide}
                        </ShowAndHideButton>
                    </ShowAndHideButtonContainer>
                    {showFields &&
                        <FeedForms
                            createPost={createNewPost}
                            title={form.title}
                            handleValues={handleValues}
                            text={form.text}
                            search={form.search}
                        />
                    }
                    <PostsList
                        renderedPosts={renderedPosts}
                        setRenderedPosts={setRenderedPosts}
                    />
                </>
            }
        </FeedAndPostContainer>
    )
}
