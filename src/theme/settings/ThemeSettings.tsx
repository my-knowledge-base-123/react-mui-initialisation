import React from 'react'
import ThemeColorPresets from '@/theme/settings/ThemeColorPresets'
import ThemeDirection from '@/theme/settings/ThemeDirection'

// ----------------------------------------------------------------------
interface Props {
  children?: React.ReactNode
}

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeDirection>{children}</ThemeDirection>
    </ThemeColorPresets>
  )
}
