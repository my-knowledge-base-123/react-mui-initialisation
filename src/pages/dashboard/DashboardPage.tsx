import React from 'react'
import useScreenSize from '@/hooks/useScreenSize'
import { Button, Typography } from '@mui/material'
import { useThemeSettingsContext } from '@/theme/settings'

const DashboardPage = (): JSX.Element => {
  const { isMobile, isTablet, isLaptop, isDesktop, isTV, size: screenSize } = useScreenSize()

  //
  const { changeColorPresets, changeMode, toggleMode, toggleDirection, changeLayout, toggleContrast, toggleStretch, resetSettings } = useThemeSettingsContext()

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

      <br />

      <Button
        variant="contained"
        onClick={() => changeMode('dark')}
      >
        To Dark Mode
      </Button>
      <Button
        variant="contained"
        onClick={toggleMode}
      >
        Toggle Mode
      </Button>

      <br />

      <Button
        variant="contained"
        onClick={toggleDirection}
      >
        Toggle Direction
      </Button>

      <br />

      <Button
        variant="contained"
        onClick={() => changeLayout('horizontal')}
      >
        To Horizon Layout
      </Button>

      <br />

      <Button
        variant="contained"
        onClick={toggleContrast}
      >
        Toggle Contrast
      </Button>

      <br />

      <Button
        variant="contained"
        onClick={toggleStretch}
      >
        Toggle Stretch
      </Button>

      <br />

      <Button
        variant="contained"
        onClick={() => {
          resetSettings()
          console.log('reset')
        }}
      >
        Reset Settings
      </Button>
    </div>
  )
}

export default DashboardPage
