import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import RegistrationPage from "../Pages/RegistrationPage";
import ProfilePage from "../Pages/ProfilePage";


export const router = createBrowserRouter([
    {
        path : "/",
        Component: Root,
        children : [
            {
                index : true,
                Component: Home
            },
            {
                path : "/login",
                Component: Login
            },
            {
                path:"/registration",
                Component: RegistrationPage,

            },{
                path : "/me",
                Component: ProfilePage
            }
            
        ]
    }
])