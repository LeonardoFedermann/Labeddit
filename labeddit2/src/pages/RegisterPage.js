import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { LoginAndRegisterForm, StyledTextField, LoginAndRegisterContainer, LogoContainer } from '../style/style'
import { goToFeed, goToLogin } from '../coordinator/Coordinator'
import { useForm } from '../custom hooks and functions/useForm'
import axios from 'axios'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'
import {BASE_URL} from '../base-url/base-url'

export default function RegisterPage() {
    const history = useHistory()
    const [form, setForm, handleValues] = useForm({ username: '', email: '', password: '' })
    const [language, setLanguage, menu, setMenu] = useContext(LanguageContext)

    useEffect(() => {
        document.title = languages[language].goToRegister
    }, [language])

    useEffect(() => {
        if (window.localStorage.getItem('token')) {
            goToFeed(history)
        }
    }, [])

    const register = async (e) => {
        e.preventDefault()
        const newUser = {
            email: form.email,
            password: form.password,
            username: form.username,
        }
        try {
            const newUserInfo = await axios.post(`${BASE_URL}users/signup`, newUser)
            window.localStorage.setItem('token', newUserInfo.data.token)
            goToFeed(history)
        } catch (error) {
            alert(error.response.message)
            console.log(error.response)
        }
    }

    return (
        <LoginAndRegisterContainer>
            <LanguagesMenu />
            <LogoContainer>
                <h1>Labeddit</h1>
            </LogoContainer>
            <LoginAndRegisterForm onSubmit={register}>
                <StyledTextField
                    label={languages[language].username}
                    color="secondary"
                    name="username"
                    value={form.username}
                    onChange={handleValues}
                    type="text"
                    required
                    inputProps={{ pattern: '^.{3,}$', title: languages[language].usernamePattern }}
                />
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
                    inputProps={{ pattern: '^.{5,}$', title: languages[language].passwordPattern }}
                />
                <div>
                    <Button
                        color="primary"
                        variant="contained"
                        type="submit"
                    >
                        {languages[language].register}
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
                        onClick={() => goToLogin(history)}
                    >
                        {languages[language].goToLogin}
                    </Button>
                </div>
            </LoginAndRegisterForm>
        </LoginAndRegisterContainer>
    )
}