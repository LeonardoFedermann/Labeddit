import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const voteComment = async (
    commentId,
    postId,
    currentDirection,
    newDirection,
    comments,
    setComments,
    languages,
    language
) => {
    let correctedDirection
    if (currentDirection === newDirection) {
        correctedDirection = 0
    } else {
        correctedDirection = newDirection
    }
    // const body = correctedDirection !== 0 ? { direction: correctedDirection } : {}
    console.log(correctedDirection)
    const body = { direction: correctedDirection }
    try {
        await axios.post(`${BASE_URL}comments/${commentId}/votes`, body, { headers })
        let newCommentsInfo = [...comments]
        newCommentsInfo.forEach((comment) => {
            if (comment.id === commentId) {
                comment.userVote = correctedDirection
                if (correctedDirection > 0 || currentDirection === -1) {
                    currentDirection - newDirection === 2 || currentDirection - newDirection === -2 ?
                        comment.voteSum += 2 :
                        comment.voteSum += 1
                } else {
                    currentDirection - newDirection === 2 || currentDirection - newDirection === -2 ?
                        comment.voteSum -= 2 :
                        comment.voteSum -= 1
                }
            }
        })
        setComments(newCommentsInfo)
    } catch (error) {
        alert(languages[language].errorMessage)
    }
}