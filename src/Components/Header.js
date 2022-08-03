import React from "react";
import "./header.css";
import { Link } from "react-router-dom";
import {
  useCreateAuthDispatchContext,
  useCreateAuthStateContext,
} from "../Contexts/authContext";
import { useCreateCartListDispatchContext } from "../Contexts/cartContext";
export default function Header() {
  const isAuth = useCreateAuthStateContext();
  const setAuth = useCreateAuthDispatchContext();
  const cart = useCreateCartListDispatchContext();
  const handleClick = () => {
    if (isAuth === true) {
      setAuth(false);
      alert("logged out");
      cart.removeCartChange([]);
    }
  };
  return (
    <div className="Header">
      <Link className="mainLink" to="/">
        {" "}
        <p className="links">Home</p>
      </Link>
      <Link className="mainLink" to="/cart">
        <p className="links">Cart</p>
      </Link>
      <Link className="mainLink" to="/signin">
        <p className="links">Sign In</p>
      </Link>
      <p onClick={handleClick} className="links">
        Sign Out
      </p>
    </div>
  );
}
