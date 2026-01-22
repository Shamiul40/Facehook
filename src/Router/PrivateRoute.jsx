import React from "react";
import { useAuth } from "../hooks/useAuth";
import { Navigate } from "react-router";

export default function PrivateRoute({ children }) {
  const { auth } = useAuth();
  console.log(auth)

  return auth.user ? children : <Navigate to="/login" />;
}
