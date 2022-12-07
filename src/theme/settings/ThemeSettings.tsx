import React from 'react'
import ThemeColorPresets from '@/theme/settings/ThemeColorPresets'

// ----------------------------------------------------------------------
interface Props {
  children?: React.ReactNode
}

export default function ThemeSettings({ children }: Props) {
  return <ThemeColorPresets>{children}</ThemeColorPresets>
}
