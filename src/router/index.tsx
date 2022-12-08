import React from 'react'
// react-router-dom
import { useRoutes, Navigate } from 'react-router-dom'
// routes
import { dashboardRoutes, errorRoutes } from './routes'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = [
    ...dashboardRoutes,
    ...errorRoutes,
    {
      path: '*',
      element: (
        <Navigate
          to="/404"
          replace
        />
      )
    }
  ]

  return useRoutes(routes)
}
