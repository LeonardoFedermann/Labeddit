import React, { useContext } from 'react'
import { CreatePostForm, SearchForm, StyledTextField, FeedFormsContainer } from '../style/style'
import Button from '@material-ui/core/Button'
import { languages } from '../languages/languages'
import { LanguageContext } from '../globalContext/LanguageContext'

export default function FeedForms(props) {
    const [language, setLanguage] = useContext(LanguageContext)
    const { createPost, title, handleValues, text, search } = props

    return (
        <FeedFormsContainer>
            <CreatePostForm onSubmit={createPost}>
                <h3>{languages[language].createYourPost}</h3>
                <StyledTextField
                    label={languages[language].title}
                    value={title}
                    name="title"
                    onChange={handleValues}
                    type="text"
                    required
                    inputProps={{ pattern: '^.{1,100}$', title: languages[language].titlePattern }}
                />
                <StyledTextField
                    label={languages[language].postText}
                    value={text}
                    name="text"
                    onChange={handleValues}
                    type="text"
                    required
                />
                <Button
                    type="submit"
                    color="primary"
                    variant="contained"
                >
                    {languages[language].createPost}
                </Button>
            </CreatePostForm>
            <SearchForm>
                <h3>{languages[language].searchAPost}</h3>
                <StyledTextField
                    label={languages[language].search}
                    value={search}
                    name="search"
                    onChange={handleValues}
                    type="text"
                />
            </SearchForm>
        </FeedFormsContainer>
    )
}