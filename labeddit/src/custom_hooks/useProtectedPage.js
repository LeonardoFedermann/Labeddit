import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { goToLogin } from '../coordinator/Coordinator'

export const useProtectedPage = () => {
    const history = useHistory()

    useEffect(() => {
        if (!window.localStorage.getItem('token')) {
            goToLogin(history)
        }
    }, [history])
}