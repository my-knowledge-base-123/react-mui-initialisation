import React from 'react'
// react-router-dom
import { RouteObject } from 'react-router-dom'
// layouts
import CompactLayout from '@/layouts/compact'
//
import { Page404 } from '../elements'

// ----------------------------------------------------------------------

export const errorRoutes: RouteObject[] = [
  {
    path: '/',
    element: <CompactLayout />,
    children: [{ path: '404', element: <Page404 /> }]
  }
]
