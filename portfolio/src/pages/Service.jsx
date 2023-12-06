import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Service() {
  return (
    <>
      <Link to='callback'>useCallback-Hook</Link>

      <Outlet />
    </>
  )
}

export default Service