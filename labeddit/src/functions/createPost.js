import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'
import { getPosts } from '../functions/getPosts'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const createPost = async (body, title, setPosts, resetForm, languages, language) => {
    const newPost = {
        body,
        title
    }
    try {
        await axios.post(`${BASE_URL}posts`, newPost, { headers })
        getPosts(setPosts, languages, language)
        resetForm()
    } catch (error) {
        alert(languages[language].errorMessage)
    }
}