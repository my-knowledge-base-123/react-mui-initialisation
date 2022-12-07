import React, { useMemo } from 'react'
import _ from 'lodash'
// @mui
import { alpha, createTheme, ThemeProvider, useTheme } from '@mui/material/styles'
import { useSettingsContext } from '@/theme/settings/SettingsContext'

// ----------------------------------------------------------------------

interface Props {
  children: React.ReactNode
}
export default function ThemeColorPresets({ children }: Props) {
  const outerTheme = useTheme()

  const { colorPresets } = useSettingsContext()

  const themeOptions = useMemo(
    () =>
      ({
        palette: {
          primary: colorPresets
        },
        customShadows: {
          primary: `0 8px 16px 0 ${alpha(colorPresets.main, 0.24)}`
        }
      } as const),
    [colorPresets]
  )

  const theme = createTheme(_.merge(outerTheme, themeOptions))

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
