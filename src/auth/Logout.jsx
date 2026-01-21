import React from 'react'
import logoutImg from "../assets/icons/logout.svg"
import { useNavigate } from 'react-router'

export default function Logout() {
    const navigate = useNavigate()

    const handleLogout=()=>{
        navigate("/login")
    }

  return (
    <button>
      <img onClick={handleLogout} src={logoutImg} alt="logout" />
    </button>
  )
}
