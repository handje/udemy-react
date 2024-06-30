import React, { useContext } from "react";

import logo from "../assets/logo.jpg";
import { CartContext, ModalContext } from "../store";
import { Modal } from "../components/cart";

const Header = () => {
  const { cart } = useContext(CartContext);
  const cartCount = cart.length;
  const { handleCartOpen } = useContext(ModalContext);
  console.log("header");
  return (
    <>
      <Modal />
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="FOOD-LOGO" />
          <h1>REACTFOOD</h1>
        </div>
        <button
          className="text-button"
          onClick={handleCartOpen}
        >{`Cart(${cartCount})`}</button>
      </header>
    </>
  );
};

export default Header;
