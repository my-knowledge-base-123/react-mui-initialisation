import React, { createContext, useCallback, useContext, useEffect, useMemo } from 'react'
// hooks
import useLocalStorage from '@/hooks/useLocalStorage'
// utils
import localStorageAvailable from '@/utils/localStorageAvailable'
//
import { SettingsContextProps, ThemeColorPresetsValue, ThemeContrastValue, ThemeDirectionValue, ThemeLayoutValue, ThemeModeValue } from './types'
import { defaultSettings } from './defaultSettings'
import { colorPresetsOption, defaultColorPreset, getColorPresets } from './colorPresets'

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  toggleMode: () => {},
  changeMode: () => {},
  // Direction
  toggleDirection: () => {},
  changeDirection: () => {},
  changeDirectionByLang: () => {},
  // Layout
  toggleLayout: () => {},
  changeLayout: () => {},
  // Contrast
  toggleContrast: () => {},
  changeContrast: () => {},
  // Color
  changeColorPresets: () => {},
  colorPresets: defaultColorPreset,
  colorPresetsOption: []
  // // Stretch
  // onToggleStretch: () => {},
  // // Reset
  // onResetSettings: () => {}
}

// ----------------------------------------------------------------------

export const SettingsContext = createContext(initialState)

export const useSettingsContext = () => {
  const context = useContext(SettingsContext)

  if (context == null) throw new Error('useSettingsContext must be use inside SettingsProvider')

  return context
}

// ----------------------------------------------------------------------

interface SettingsProviderProps {
  children: React.ReactNode
}

export function SettingsProvider({ children }: SettingsProviderProps) {
  const [settings, setSettings] = useLocalStorage('settings', defaultSettings)

  const storageAvailable = localStorageAvailable()

  const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : ''

  const isArabic = langStorage === 'ar'

  useEffect(() => {
    if (isArabic) {
      changeDirectionByLang('ar')
    }
  }, [isArabic])

  // Mode
  const toggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light'
    setSettings({ ...settings, themeMode })
  }, [setSettings, settings])

  const changeMode = useCallback(
    (mode: ThemeModeValue) => {
      setSettings({ ...settings, themeMode: mode })
    },
    [setSettings, settings]
  )

  // Direction
  const toggleDirection = useCallback(() => {
    const themeDirection = settings.themeDirection === 'rtl' ? 'ltr' : 'rtl'
    setSettings({ ...settings, themeDirection })
  }, [setSettings, settings])

  const changeDirection = useCallback(
    (direction: ThemeDirectionValue) => {
      setSettings({ ...settings, themeDirection: direction })
    },
    [setSettings, settings]
  )

  const changeDirectionByLang = useCallback(
    (lang: string) => {
      const themeDirection = lang === 'ar' ? 'rtl' : 'ltr'
      setSettings({ ...settings, themeDirection })
    },
    [setSettings, settings]
  )

  // Layout
  const toggleLayout = useCallback(() => {
    const themeLayout = settings.themeLayout === 'vertical' ? 'mini' : 'vertical'
    setSettings({ ...settings, themeLayout })
  }, [setSettings, settings])

  const changeLayout = useCallback(
    (layout: ThemeLayoutValue) => {
      setSettings({ ...settings, themeLayout: layout })
    },
    [setSettings, settings]
  )

  // Contrast
  const toggleContrast = useCallback(() => {
    const themeContrast = settings.themeContrast === 'default' ? 'bold' : 'default'
    setSettings({ ...settings, themeContrast })
  }, [setSettings, settings])

  const changeContrast = useCallback(
    (contrast: ThemeContrastValue) => {
      setSettings({ ...settings, themeContrast: contrast })
    },
    [setSettings, settings]
  )

  // Color Presets
  const changeColorPresets = useCallback(
    (colorPresets: ThemeColorPresetsValue) => {
      const themeColorPresets = colorPresets
      setSettings({ ...settings, themeColorPresets })
    },
    [setSettings, settings]
  )

  const memoizedValue = useMemo(
    () => ({
      ...settings,
      // Mode
      toggleMode,
      changeMode,
      // Direction
      toggleDirection,
      changeDirection,
      changeDirectionByLang,
      // Layout
      toggleLayout,
      changeLayout,
      // Contrast
      toggleContrast,
      changeContrast,
      // Color Presets
      changeColorPresets,
      colorPresets: getColorPresets(settings.themeColorPresets),
      colorPresetsOption
    }),
    [
      settings,
      // Mode
      toggleMode,
      changeMode,
      // Direction
      toggleDirection,
      changeDirection,
      changeDirectionByLang,
      // Layout
      toggleLayout,
      changeLayout,
      // Contrast
      toggleContrast,
      changeContrast,
      // Color Presets
      changeColorPresets
    ]
  )

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>
}
