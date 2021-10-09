export const searchPost = (search, posts, setRenderedPosts) => {
    if (search) {
        let newPostsList = posts.filter((post) => {
            return (post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.username.toLowerCase().includes(search.toLowerCase()) ||
                post.body.toLowerCase().includes(search.toLowerCase()))
        })
        setRenderedPosts(newPostsList)
    } else {
        setRenderedPosts(posts)
    }
}