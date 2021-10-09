import { useState } from 'react'

export const useLanguages = () => {
    const [language, setLanguage] = useState('pt')
    const [menu, setMenu] = useState(false)

    const changeLanguage = (chosenLanguage) => {
        switch (chosenLanguage) {
            case 'pt':
                setLanguage('pt')
                break
            case 'en':
                setLanguage('en')
                break
            case 'es':
                setLanguage('es')
                break
            default: break
        }
    }

    return [language, setLanguage, menu, setMenu, changeLanguage]
}