import "./innercart.css";
import React from "react";
import {
  useCreateCartListDispatchContext,
  useCreateCartListStateContext,
} from "../Contexts/cartContext";

export default function InnerCart({ value }) {
  const getList = useCreateCartListStateContext();
  const setList = useCreateCartListDispatchContext();

  const handleClick = () => {
    const newList = getList.filter((childValue, index) => {
      if (childValue.id === value.id) {
        return false;
      }
      return true;
    });

    setList.removeCartChange(newList);
  };

  return (
    <div className="innerCartContainer">
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
      <button onClick={handleClick} className="cardButton">
        Remove from Cart
      </button>
    </div>
  );
}
