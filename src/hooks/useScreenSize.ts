// @mui
import { useTheme, Breakpoint } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useEffect, useState } from 'react'

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
type UseScreenType = () => {
  isMobile: boolean
  isTablet: boolean
  isLaptop: boolean
  isDesktop: boolean
  isTV: boolean
  size: {
    width: number
    height: number
  }
}

const useScreenSize: UseScreenType = () => {
  // Detect device according to breakpoints.
  const isMobile = useResponsive('down', 'tablet')
  const isTablet = useResponsive('between', 'tablet', 'laptop')
  const isLaptop = useResponsive('between', 'laptop', 'desktop')
  const isDesktop = useResponsive('between', 'desktop', 'tv')
  const isTV = useResponsive('up', 'tv')

  // Compute screen width and height.
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 })

  useEffect(() => {
    const handleWindowResize = (): void => {
      setSize({ width: window.innerWidth, height: window.innerHeight })
    }

    // Get initial window size.
    handleWindowResize()

    window.addEventListener('resize', handleWindowResize)

    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return { isMobile, isTablet, isLaptop, isDesktop, isTV, size }
}

export default useScreenSize
