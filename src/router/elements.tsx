import React, { ElementType, lazy, Suspense } from 'react'
// components
import LoadingScreen from '@/components/loading-screen'

// ----------------------------------------------------------------------

// eslint-disable-next-line react/display-name
const Loadable = (Component: ElementType) => (props: any) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  )
}

// ----------------------------------------------------------------------

// Dashboard: General
export const DashboardPage = Loadable(lazy(async () => await import('../pages/dashboard/DashboardPage')))

// Dashboard: User
export const UserProfilePage = Loadable(lazy(async () => await import('../pages/dashboard/UserProfilePage')))

// Error
export const Page404 = Loadable(lazy(async () => await import('../pages/errors/Page404')))
