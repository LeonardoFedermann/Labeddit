import { useEffect } from 'react'

export const useSetDocumentTitle = (newTitle) => {
    useEffect(() => {
        document.title = newTitle
    }, [newTitle])
}