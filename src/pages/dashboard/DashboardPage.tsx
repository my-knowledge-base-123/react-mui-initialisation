import React from 'react'
import useScreen from '@/hooks/useScreen'

const DashboardPage = (): JSX.Element => {
  const { isMobile, isTablet, isLaptop, isDesktop, isTV } = useScreen()

  return (
    <div>
      <div>{String(isMobile)}</div>
      <div>{String(isTablet)}</div>
      <div>{String(isLaptop)}</div>
      <div>{String(isDesktop)}</div>
      <div>{String(isTV)}</div>
    </div>
  )
}

export default DashboardPage
