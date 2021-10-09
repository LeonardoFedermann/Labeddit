import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const getPosts = async (setPosts, languages, language) => {
    try {
        const listOfPosts = await axios.get(`${BASE_URL}posts`, { headers })
        setPosts(listOfPosts.data)
    } catch (error) {
        alert(languages[language].errorMessage)
    }
}