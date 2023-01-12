import React from 'react'
import { Outlet } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <>
      <h1>Dashboard Layout</h1>
      <Outlet />
    </>
  )
}
