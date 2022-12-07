export type ThemeModeValue = 'light' | 'dark'
export type ThemeDirectionValue = 'rtl' | 'ltr'
export type ThemeContrastValue = 'default' | 'bold'
export type ThemeLayoutValue = 'vertical' | 'horizontal' | 'mini'
export type ThemeColorPresetsValue = 'default' | 'cyan' | 'purple' | 'blue' | 'orange' | 'red'
export type ThemeStretchValue = boolean

export interface SettingsValueProps {
  themeMode: ThemeModeValue
  themeLayout: ThemeLayoutValue
  themeStretch: ThemeStretchValue
  themeContrast: ThemeContrastValue
  themeDirection: ThemeDirectionValue
  themeColorPresets: ThemeColorPresetsValue
}

interface ColorVariants {
  name: string
  lighter: string
  light: string
  main: string
  dark: string
  darker: string
  contrastText: string
}

export type SettingsContextProps = SettingsValueProps & {
  colorPresets: ColorVariants
  colorPresetsOption: Array<{
    name: string
    value: string
  }>

  // Mode
  toggleMode: VoidFunction
  changeMode: (mode: ThemeModeValue) => void

  // Direction
  toggleDirection: VoidFunction
  changeDirection: (direction: ThemeDirectionValue) => void
  changeDirectionByLang: (lang: string) => void

  // Layout
  toggleLayout: VoidFunction
  changeLayout: (layout: ThemeLayoutValue) => void

  // Contrast
  toggleContrast: VoidFunction
  changeContrast: (contrast: ThemeContrastValue) => void

  // Color
  changeColorPresets: (colorPresets: ThemeColorPresetsValue) => void

  // Stretch
  toggleStretch: VoidFunction

  // Reset
  resetSettings: VoidFunction
}
