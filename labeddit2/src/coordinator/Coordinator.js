export const goToRegister = (history) => {
    history.push('/register')
}

export const goToLogin = (history) => {
    history.push('/')
}

export const goToFeed = (history) => {
    history.push('/feed')
}

export const goBack = (history) => {
    history.goBack()
}

export const goToPostPage = (history, id) => {
    history.push(`/feed/${id}`)
}