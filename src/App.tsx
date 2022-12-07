import React from 'react'
// @theme
import ThemeProvider from '@/theme'
import { ThemeSettings, ThemeSettingsProvider } from '@/theme/settings'
//
import { DashboardPage } from '@/pages/dashboard'

function App(): JSX.Element {
  return (
    <ThemeSettingsProvider>
      <ThemeProvider>
        <ThemeSettings>
          <DashboardPage />
        </ThemeSettings>
      </ThemeProvider>
    </ThemeSettingsProvider>
  )
}

export default App
