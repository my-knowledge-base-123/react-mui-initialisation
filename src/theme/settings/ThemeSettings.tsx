import React from 'react'
import ThemeColorPresets from '@/theme/settings/ThemeColorPresets'
import ThemeDirection from '@/theme/settings/ThemeDirection'
import ThemeContrast from '@/theme/settings/ThemeContrast'

// ----------------------------------------------------------------------
interface Props {
  children?: React.ReactNode
}

export default function ThemeSettings({ children }: Props) {
  return (
    <ThemeColorPresets>
      <ThemeContrast>
        <ThemeDirection>{children}</ThemeDirection>
      </ThemeContrast>
    </ThemeColorPresets>
  )
}
