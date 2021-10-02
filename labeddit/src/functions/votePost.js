import axios from 'axios'
import { BASE_URL } from '../base-url/base-url'

const token = window.localStorage.getItem('token')
const headers = { Authorization: token }

export const votePost = async (
    id,
    currentDirection,
    newDirection,
    language,
    languages,
    posts,
    setPosts,
    isThisFeed
) => {
    let correctedDirection
    if (currentDirection === newDirection) {
        correctedDirection = 0
    } else {
        correctedDirection = newDirection
    }
    // const body = correctedDirection !== 0 ? { direction: correctedDirection } : {}
    const body = { direction: correctedDirection }
    try {
        await axios.post(`${BASE_URL}posts/${id}/votes`, body, { headers })
        if (isThisFeed) {
            let newPostsInfo = [...posts]
            newPostsInfo.forEach((post) => {
                if (post.id === id) {
                    post.userVote = correctedDirection
                    if (correctedDirection > 0 || currentDirection === -1) {
                        currentDirection - newDirection === 2 || currentDirection - newDirection === -2 ?
                            post.voteSum += 2 :
                            post.voteSum += 1
                    } else {
                        currentDirection - newDirection === 2 || currentDirection - newDirection === -2 ?
                            post.voteSum -= 2 :
                            post.voteSum -= 1
                    }
                }
            })
            setPosts(newPostsInfo)
        } else {
            let voteSum = posts.voteSum
            if (correctedDirection > 0 || currentDirection === -1) {
                currentDirection - newDirection === 2 || currentDirection - newDirection === -2 ?
                    voteSum += 2 :
                    voteSum += 1
            } else {
                currentDirection - newDirection === 2 || currentDirection - newDirection === -2 ?
                    voteSum -= 2 :
                    voteSum -= 1
            }
            setPosts({ ...posts, voteSum, userVote: correctedDirection })
        }
    } catch (error) {
        alert(languages[language].errorMessage)
    }
}