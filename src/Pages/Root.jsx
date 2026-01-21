import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'

export default function Root() {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
      <>footer</>
    </div>
  )
}
