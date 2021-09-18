import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import { ErrorContainer } from '../style/style'
import { goToLogin } from '../coordinator/Coordinator'
import LanguagesMenu from '../components/LanguagesMenu'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'

export default function ErrorPage() {
    const history = useHistory()
    const [language, setLanguage, menu, setMenu] = useContext(LanguageContext)

    useEffect(() => {
        document.title = languages[language].errorPageTitle
    }, [language])

    return (
        <ErrorContainer>
            <LanguagesMenu />
            <h1>{languages[language].errorPageTitle}</h1>
            <p>{languages[language].errorPageText}</p>
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => goToLogin(history)}
                >
                    {languages[language].goToHome}
                </Button>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={() => setMenu(true)}
                >
                    {languages[language].changeLanguage}
                </Button>
            </div>
        </ErrorContainer>
    )
}