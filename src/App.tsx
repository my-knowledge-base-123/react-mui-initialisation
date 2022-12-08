import React from 'react'
// react-router
import { BrowserRouter } from 'react-router-dom'
// routes
import Router from '@/router'
// theme
import ThemeProvider from '@/theme'
import { ThemeSettings, ThemeSettingsProvider } from '@/theme/settings'

function App(): JSX.Element {
  return (
    <ThemeSettingsProvider>
      <ThemeProvider>
        <ThemeSettings>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeSettings>
      </ThemeProvider>
    </ThemeSettingsProvider>
  )
}

export default App
