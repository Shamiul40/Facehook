import React from 'react'
import logoutImg from "../assets/icons/logout.svg"

export default function Logout() {
  return (
    <button>
      <img src={logoutImg} alt="logout" />
    </button>
  )
}
