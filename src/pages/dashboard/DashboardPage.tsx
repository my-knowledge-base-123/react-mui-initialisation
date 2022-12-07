import React from 'react'
import useScreenSize from '@/hooks/useScreenSize'
import { Button, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useThemeSettingsContext } from '@/theme/settings'

const DashboardPage = (): JSX.Element => {
  const { isMobile, isTablet, isLaptop, isDesktop, isTV, size: screenSize } = useScreenSize()

  //
  const theme = useTheme()
  console.log(theme.typography.fontFamily)

  //
  const { changeColorPresets } = useThemeSettingsContext()

  return (
    <div>
      <div>{String(isMobile)}</div>
      <div>{String(isTablet)}</div>
      <div>{String(isLaptop)}</div>
      <div>{String(isDesktop)}</div>
      <div>{String(isTV)}</div>
      <div>{String(screenSize.width)}</div>
      <div>{String(screenSize.height)}</div>
      <Typography
        variant={'h1'}
        color="primary"
      >
        H1 Typography
      </Typography>
      <Typography variant={'h2'}>H2 Typography</Typography>
      <Typography variant={'h3'}>H3 Typography</Typography>
      <Typography variant={'h4'}>H4 Typography</Typography>
      <Typography variant={'h5'}>H5 Typography</Typography>
      <Typography variant={'h6'}>H6 Typography</Typography>
      <Typography variant={'subtitle2'}>Subtitle 1</Typography>
      <Button
        variant="contained"
        onClick={() => changeColorPresets('red')}
      >
        To Red
      </Button>
      <Button
        variant="contained"
        onClick={() => changeColorPresets('purple')}
      >
        To Purple
      </Button>
    </div>
  )
}

export default DashboardPage
