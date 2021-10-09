import { useEffect } from 'react'

export const useSetRenderedPosts = (setRenderedPosts, posts) => {
    useEffect(() => {
        setRenderedPosts(posts)
    }, [posts])
}