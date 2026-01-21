import React, { useState } from 'react'
import {authContext} from "../Context/authContext"

export default function AuthProvider({children}) {

  const [auth, setAuth] = useState({})

  return (
    <authContext.Provider value={{auth, setAuth}}>
      {children}
    </authContext.Provider>
  )
}
