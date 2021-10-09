export const createComment = async (e) => {
    e.preventDefault()
    try {
        const newComment = {
            body: form.text
        }
        await axios.post(`${BASE_URL}posts/${pathParams.postId}/comments`, newComment, { headers })
        getPostComments(pathParams.postId)
        resetForm()
    } catch (error) {
        alert(languages[language].errorMessage)
    }
}