import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const getPostComments = async (id, setComments, languages, language) => {
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