import React from 'react'
import useScreenSize from '@/hooks/useScreenSize'

const DashboardPage = (): JSX.Element => {
  const { isMobile, isTablet, isLaptop, isDesktop, isTV, size: screenSize } = useScreenSize()

  return (
    <div>
      <div>{String(isMobile)}</div>
      <div>{String(isTablet)}</div>
      <div>{String(isLaptop)}</div>
      <div>{String(isDesktop)}</div>
      <div>{String(isTV)}</div>
      <div>{String(screenSize.width)}</div>
      <div>{String(screenSize.height)}</div>
    </div>
  )
}

export default DashboardPage
