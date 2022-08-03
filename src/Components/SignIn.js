import React from "react";
import { useNavigate } from "react-router-dom";
import { useCreateAuthDispatchContext } from "../Contexts/authContext";
import "./signin.css";
export default function SignIn() {
  const [userName, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const setState = useCreateAuthDispatchContext();
  const navigate = useNavigate();
  const handleClick = () => {
    if (userName !== "admin" && password !== "admin123") {
      alert("Invalid details");
      return;
    }
    setState(true);
    navigate("/");
  };

  return (
    <div className="mainContainer">
      <div className="inputContainer">
        <input
          onChange={(e) => {
            setUserName(e.target.value);
          }}
          className="input"
        ></input>
        <input
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          className="input"
        ></input>
      </div>
      <button
        style={{
          width: "70px",
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "15px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "10px",
        }}
        onClick={handleClick}
      >
        {" "}
        Sign In
      </button>
    </div>
  );
}
