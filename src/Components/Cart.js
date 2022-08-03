import React from "react";
import "./cart.css";
import { useCreateCartListStateContext } from "../Contexts/cartContext";
import InnerCart from "./InnerCart";

export default function Cart() {
  const list = useCreateCartListStateContext();

  return (
    <div className="cartContainer">
      {list.map((value, index) => {
        return <InnerCart value={value} />;
      })}
    </div>
  );
}
