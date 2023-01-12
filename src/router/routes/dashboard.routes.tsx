import React from 'react'
import { Navigate, RouteObject } from 'react-router-dom'
// layouts
import DashboardLayout from '@/layouts/dashboard'
//
import { PATH_AFTER_LOGIN } from '../paths'
import { UserProfilePage } from '../elements'

// ----------------------------------------------------------------------

export const dashboardRoutes: RouteObject[] = [
  {
    path: 'dashboard',
    element: <DashboardLayout />,
    children: [
      {
        element: (
          <Navigate
            to={PATH_AFTER_LOGIN}
            replace
          />
        ),
        index: true
      },

      // User routes
      {
        path: 'user',
        children: [
          {
            element: (
              <Navigate
                to="/dashboard/user/me"
                replace
              />
            ),
            index: true
          },
          { path: 'me', element: <UserProfilePage /> }
        ]
      }
    ]
  }
]
