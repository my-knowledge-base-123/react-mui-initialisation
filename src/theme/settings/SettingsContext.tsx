import React, { createContext, useCallback, useContext, useMemo } from 'react'
// hooks
import useLocalStorage from '@/hooks/useLocalStorage'
// utils
// import localStorageAvailable from '@/utils/localStorageAvailable'
//
import { SettingsContextProps } from './types'
import { defaultSettings } from './defaultSettings'
import { colorPresetsOption, defaultColorPreset, getColorPresets } from './colorPresets'

// ----------------------------------------------------------------------

const initialState: SettingsContextProps = {
  ...defaultSettings,
  // Mode
  toggleMode: () => {},
  changeMode: () => {},
  // // Direction
  // onToggleDirection: () => {},
  // onChangeDirection: () => {},
  // onChangeDirectionByLang: () => {},
  // // Layout
  // onToggleLayout: () => {},
  // onChangeLayout: () => {},
  // // Contrast
  // onToggleContrast: () => {},
  // onChangeContrast: () => {},
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

  // const storageAvailable = localStorageAvailable()
  //
  // const langStorage = storageAvailable ? localStorage.getItem('i18nextLng') : ''
  //
  // const isArabic = langStorage === 'ar'

  // Mode
  const toggleMode = useCallback(() => {
    const themeMode = settings.themeMode === 'light' ? 'dark' : 'light'
    setSettings({ ...settings, themeMode })
  }, [setSettings, settings])

  const changeMode = useCallback(
    (mode: string) => {
      const themeMode = mode
      setSettings({ ...settings, themeMode })
    },
    [setSettings, settings]
  )

  // Color Presets
  const changeColorPresets = useCallback(
    (colorPresets: string) => {
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
      // Color Presets
      changeColorPresets
    ]
  )

  return <SettingsContext.Provider value={memoizedValue}>{children}</SettingsContext.Provider>
}
