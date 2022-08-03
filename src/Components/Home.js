import React from "react";
import { data } from "./Data";
import Card from "./Card";
export default function Home() {
  return (
    <div className="cardContainer">
      {data.map((value, index) => {
        return <Card value={value} index={index} key={value.id} />;
      })}
    </div>
  );
}
