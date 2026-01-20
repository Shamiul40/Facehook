import React from 'react'
import { Outlet } from 'react-router'

export default function Root() {
  return (
    <div>
      <>header</>
      <Outlet></Outlet>
      <>footer</>
    </div>
  )
}
