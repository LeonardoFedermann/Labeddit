import { useEffect } from 'react'
import { searchPost } from '../functions/searchPost'

export const useSearchPost = (search, posts, setRenderedPosts) => {
    useEffect(() => {
        searchPost(search, posts, setRenderedPosts)
    }, [search])
}