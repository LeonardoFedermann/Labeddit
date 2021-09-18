import React from 'react'
import { LanguageContext } from './LanguageContext'
import { useLanguages } from '../custom hooks and functions/useLanguages'

export const LanguageContextProvider = (props) => {
    const [language, setLanguage, menu, setMenu, changeLanguage] = useLanguages()
    return (
        <LanguageContext.Provider value={[language, setLanguage, menu, setMenu, changeLanguage]}>
            {props.children}
        </LanguageContext.Provider>
    )
}