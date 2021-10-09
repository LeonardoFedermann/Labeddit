import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'
import { getPostComments } from '../functions/getPostComments'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const createComment = async (
    body,
    post,
    setComments,
    setPost,
    resetForm,
    languages,
    language
) => {
    try {
        const newComment = { body }
        await axios.post(`${BASE_URL}posts/${post.id}/comments`, newComment, { headers })
        getPostComments(post.id, setComments, languages, language)
        setPost({ ...post, commentCount: String(Number(post.commentCount) + 1) })
        resetForm()
    } catch (error) {
        alert(languages[language].errorMessage)
    }
}