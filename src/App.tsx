import React from 'react'
import ThemeProvider from '@/theme'
import { DashboardPage } from '@/pages/dashboard'

function App(): JSX.Element {
  return (
    <ThemeProvider>
      <DashboardPage />
    </ThemeProvider>
  )
}

export default App
