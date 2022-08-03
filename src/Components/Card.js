import React from "react";
import "./Card.css";
import { useNavigate } from "react-router";
import {
  useCreateAuthDispatchContext,
  useCreateAuthStateContext,
} from "../Contexts/authContext";
import {
  useCreateCartListDispatchContext,
  useCreateCartListStateContext,
} from "../Contexts/cartContext";
export default function Card({ value, index }) {
  const cartList = useCreateCartListStateContext();
  const addCart = useCreateCartListDispatchContext();
  const isLogged = useCreateAuthStateContext();
  const Navigate = useNavigate();

  const handleCart = () => {
    let flag = false;
    console.log(cartList);
    for (let i = 0; i < cartList.length; i++) {
      console.log(cartList);
      if (cartList[i].id === value.id) {
        flag = true;
      }
    }

    if (isLogged) {
      if (!flag) {
        addCart.handleCartListChange(value);
      } else {
        alert("item already added");
      }
    } else {
      alert("Log in First");
      Navigate("/signin");
    }
  };

  return (
    <>
      <div className="Container">
        <h1>{value.name}</h1>
        <p className="text1">
          <span style={{ color: "gray" }}>IMDB : </span>
          {value.imdb}
        </p>
        <p className="text1">
          <span style={{ color: "gray" }}>Rotten Tomatoes : </span>
          {value.rottent}
        </p>
        <p className="text1">
          <span style={{ color: "gray" }}>Google : </span>
          {value.google}
        </p>
        <img style={{ height: "200px" }} src={value.image}></img>

        <button className="cardButton" onClick={handleCart}>
          Add to Cart
        </button>
      </div>
    </>
  );
}
