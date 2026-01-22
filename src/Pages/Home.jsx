import React from 'react'
import { Link } from 'react-router'

export default function Home() {
  return (
    <div>
      <h1>Home page</h1>
      <Link to="/me">go to profile page</Link>
    </div>
  )
}
