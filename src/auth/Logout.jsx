import React from 'react'
import logoutImg from "../assets/icons/logout.svg"
import { useNavigate } from 'react-router'
import { useAuth } from '../hooks/useAuth'

export default function Logout() {
    const navigate = useNavigate()
    const {setAuth} = useAuth()

    const handleLogout=()=>{
        navigate("/login")
    }

  return (
    <button>
      <img onClick={handleLogout} src={logoutImg} alt="logout" />
    </button>
  )
}
