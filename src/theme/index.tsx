import React, { useMemo } from 'react'
// @mui
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider, ThemeOptions } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
// Custom theme
import GlobalStyles from './globalStyles'
import palette from './palette'
import breakpoints from './breakpoints'

interface ThemeProviderProps {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const themeOptions = useMemo<ThemeOptions>(
    () => ({
      palette: palette('light'),
      breakpoints,
      typography: {},
      zIndex: {},
      transitions: {},
      components: {}
    }),
    []
  )

  const theme = createTheme(themeOptions)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
