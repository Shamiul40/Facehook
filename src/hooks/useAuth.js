import { useContext, useDebugValue } from "react"
import { authContext } from "../Context/authContext"


export const useAuth=()=>{
        const {auth} = useContext(authContext)

            useDebugValue(auth, auth=>auth?.user ? "user is logged in" : "user logged out")
    return  useContext(authContext)
}