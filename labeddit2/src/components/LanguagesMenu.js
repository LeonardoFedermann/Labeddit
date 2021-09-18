import React, { useContext } from 'react'
import { LanguageContext } from '../globalContext/LanguageContext'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import { Menu } from '../style/style'

export default function LanguagesMenu() {
    const [language, setLanguage, menu, setMenu, changeLanguage] = useContext(LanguageContext)

    const setLanguageAndCloseMenu = (chosenLanguage) => {
        changeLanguage(chosenLanguage)
        setMenu(false)
    }

    return (
        <Drawer size="big" anchor="left" open={menu} onClose={() => { setMenu(false) }}>
            <Menu>
                <Button variant="contained" color={language === 'pt' ? "secondary" : "primary"} onClick={() => setLanguageAndCloseMenu('pt')}>Português</Button>
                <Button variant="contained" color={language === 'en' ? "secondary" : "primary"} onClick={() => setLanguageAndCloseMenu('en')}>English</Button>
                <Button variant="contained" color={language === 'es' ? "secondary" : "primary"} onClick={() => setLanguageAndCloseMenu('es')}>Español</Button>
            </Menu>
        </Drawer>
    )
}