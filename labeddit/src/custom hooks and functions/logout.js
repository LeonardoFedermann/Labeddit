import { goToLogin } from '../coordinator/Coordinator'

export default function logout(history) {
    window.localStorage.removeItem('token')
    goToLogin(history)
}