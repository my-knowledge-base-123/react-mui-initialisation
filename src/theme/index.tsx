import React, { useMemo } from 'react'
// @mui
import { ThemeProvider as MUIThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles'
import { CssBaseline } from '@mui/material'
// Custom theme
import { useSettingsContext } from '@/theme/settings/SettingsContext'
import GlobalStyles from './globalStyles'
import palette from './palette'
import breakpoints from './breakpoints'
import typography from './typography'
import shadows from './shadows'
import customShadows from './customShadows'
import components from './components'

interface ThemeProviderProps {
  children?: React.ReactNode
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const { themeMode, themeDirection } = useSettingsContext()

  const themeOptions = useMemo(
    () =>
      ({
        palette: palette(themeMode),
        breakpoints,
        shape: { borderRadius: 8 },
        direction: themeDirection,
        zIndex: {},
        transitions: {},
        shadows: shadows(themeMode),
        customShadows: customShadows(themeMode)
      } as const),
    [themeDirection, themeMode]
  )

  let theme = createTheme(themeOptions)
  theme = createTheme(theme, {
    typography: typography(theme),
    components: components(theme)
  })

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
