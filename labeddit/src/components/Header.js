import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { HeaderContainer } from '../style/style'
import { goBack } from '../coordinator/Coordinator'
import { logout } from '../functions/logout'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'

export default function Header(props) {
    const history = useHistory()
    const [language, setLanguage, menu, setMenu] = useContext(LanguageContext)

    return (
        <HeaderContainer>
            <h1>Labeddit</h1>
            <div>
                <p onClick={() => goBack(history)}>{languages[language].goBack}</p>
                <p onClick={() => setMenu(true)}>{languages[language].changeLanguage}</p>
                <p onClick={() => logout(history)}>{languages[language].logout}</p>
            </div>
        </HeaderContainer>
    )
}