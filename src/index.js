import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App";
import { AuthProvider } from "./Contexts/authContext";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./Contexts/cartContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <CartProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </CartProvider>
  </BrowserRouter>
);
