import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const getPostDetails = async (id, setPost, languages, language) => {
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