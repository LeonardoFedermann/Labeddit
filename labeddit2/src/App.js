import React from 'react'
import Routes from './routes/Routes'
import { ThemeProvider } from '@material-ui/core/styles'
import { Theme } from './theme/Theme'
import { LanguageContextProvider } from './globalContext/LanguageContextProvider'

export default function App() {
  return (
    <LanguageContextProvider>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </LanguageContextProvider>
  )
}

