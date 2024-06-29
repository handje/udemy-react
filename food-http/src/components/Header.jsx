import React from "react";

import logo from "../assets/logo.jpg";
import Cart from "./cart/Cart";
import Checkout from "./cart/Checkout";

const Header = () => {
  return (
    <>
      <Checkout />
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="FOOD-LOGO" />
          <h1>REACTFOOD</h1>
        </div>
        <button className="text-button">Cart(count)</button>
      </header>
    </>
  );
};

export default Header;
