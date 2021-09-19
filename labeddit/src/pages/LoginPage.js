import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Button from '@material-ui/core/Button'
import { LoginAndRegisterForm, StyledTextField, LoginAndRegisterContainer, LogoContainer } from '../style/style'
import { useForm } from '../custom hooks and functions/useForm'
import { goToFeed, goToRegister } from '../coordinator/Coordinator'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import {BASE_URL} from '../base-url/base-url'

export default function LoginPage() {
    const history = useHistory()
    const [form, setForm, handleValues] = useForm({ email: '', password: '' })
    const [language, setLanguage, menu, setMenu] = useContext(LanguageContext)

    useEffect(() => {
        document.title = languages[language].welcome
    }, [language])

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            goToFeed(history)
        }
    }, [])

    const login = async (e) => {
        e.preventDefault()
        const user = {
            email: form.email,
            password: form.password
        }
        try {
            const loggedUser = await axios.post(`${BASE_URL}users/login`, user)
            window.localStorage.setItem('token', loggedUser.data.token)
            goToFeed(history)
        } catch (error) {
            alert(languages[language].errorMessageLogin)
        }
    }

    return (
        <LoginAndRegisterContainer>
            <LanguagesMenu />
            <LogoContainer>
                <h1>Labeddit</h1>
            </LogoContainer>
            <LoginAndRegisterForm onSubmit={login}>
                <StyledTextField
                    label={languages[language].email}
                    color="secondary"
                    name="email"
                    value={form.email}
                    onChange={handleValues}
                    type="email"
                    required
                />
                <StyledTextField
                    label={languages[language].password}
                    color="secondary"
                    name="password"
                    value={form.password}
                    onChange={handleValues}
                    type="password"
                    required
                />
                <div>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        {languages[language].login}
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => setMenu(true)}
                    >
                        {languages[language].changeLanguage}
                    </Button>
                    <Button
                        color="primary"
                        variant="contained"
                        onClick={() => goToRegister(history)}
                    >
                        {languages[language].goToRegister}
                    </Button>
                </div>
            </LoginAndRegisterForm>
        </LoginAndRegisterContainer>
    )
}