// @mui
import { useTheme, Breakpoint } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

// ----------------------------------------------------------------------

type ReturnType = boolean

type Query = 'up' | 'down' | 'between' | 'only'

type Value = Breakpoint | number

const useResponsive = (query: Query, start?: Value, end?: Value): ReturnType => {
  const theme = useTheme()

  const mediaUp = useMediaQuery(theme.breakpoints.up(start as Value))

  const mediaDown = useMediaQuery(theme.breakpoints.down(start as Value))

  const mediaBetween = useMediaQuery(theme.breakpoints.between(start as Value, end as Value))

  const mediaOnly = useMediaQuery(theme.breakpoints.only(start as Breakpoint))

  if (query === 'up') {
    return mediaUp
  }

  if (query === 'down') {
    return mediaDown
  }

  if (query === 'between') {
    return mediaBetween
  }

  return mediaOnly
}

// ----------------------------------------------------------------------

type ScreenType = 'isMobile' | 'isTablet' | 'isLaptop' | 'isDesktop' | 'isTV'

const useScreen = (): {
  [key in ScreenType]: boolean
} => {
  const isMobile = useResponsive('down', 'tablet')
  const isTablet = useResponsive('between', 'tablet', 'laptop')
  const isLaptop = useResponsive('between', 'laptop', 'desktop')
  const isDesktop = useResponsive('between', 'desktop', 'tv')
  const isTV = useResponsive('up', 'tv')

  return { isMobile, isTablet, isLaptop, isDesktop, isTV }
}

export default useScreen
