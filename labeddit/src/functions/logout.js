import { goToLogin } from '../coordinator/Coordinator'

export const logout = (history) => {
    window.localStorage.removeItem('token')
    goToLogin(history)
}