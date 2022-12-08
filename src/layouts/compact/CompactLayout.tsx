import React from 'react'
// react-router-dom
import { Outlet } from 'react-router-dom'

export default function CompactLayout() {
  return (
    <>
      <h1>Compact Layout</h1>
      <Outlet />
    </>
  )
}
