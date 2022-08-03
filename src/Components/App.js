import "./App.css";
import React from "react";
import Data from "./Data";
import Home from "./Home";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import SignIn from "./SignIn";
import RouteSignIn from "../routes/RouteSignIn";
import CartRoute from "../routes/CartRoute";
function App() {
  return (
    <div className="appMain">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <CartRoute>
              <Cart />
            </CartRoute>
          }
        />
        <Route
          path="/signin"
          element={
            <RouteSignIn>
              <SignIn />
            </RouteSignIn>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
