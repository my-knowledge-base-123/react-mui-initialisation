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

  // // Mode
  // onToggleMode: VoidFunction
  // onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void
  //
  // // Direction
  // onToggleDirection: VoidFunction
  // onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void
  // onChangeDirectionByLang: (lang: string) => void
  //
  // // Layout
  // onToggleLayout: VoidFunction
  // onChangeLayout: (event: React.ChangeEvent<HTMLInputElement>) => void
  //
  // // Contrast
  // onToggleContrast: VoidFunction
  // onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void

  // Color
  changeColorPresets: (colorPresets: string) => void

  // // Stretch
  // onToggleStretch: VoidFunction
  //
  // // Reset
  // onResetSettings: VoidFunction
}
