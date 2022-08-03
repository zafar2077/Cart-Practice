import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../Contexts/authContext";

export default function RouteSignIn({ children }) {
  const checkAuthentication = useCreateAuthStateContext();
  if (checkAuthentication) {
    alert("already logged in");
    return <Navigate to="/" />;
  }

  return children;
}
