import { useEffect } from 'react'
import { getPosts } from '../functions/getPosts'

export const useGetPosts = (setPosts, languages, language) => {
    useEffect(() => {
        getPosts(setPosts, languages, language)
    }, [])
}