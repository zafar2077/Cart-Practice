import React from "react";
import { Navigate } from "react-router-dom";
import { useCreateAuthStateContext } from "../Contexts/authContext";

export default function CartRoute({ children }) {
  const checkAuthentication = useCreateAuthStateContext();
  if (!checkAuthentication) {
    alert("Login first");
    return <Navigate to="/signin" />;
  }
  return children;
}
