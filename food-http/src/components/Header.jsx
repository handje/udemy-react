import React, { useContext } from "react";

import logo from "../assets/logo.jpg";
import { CartContext, UserProgressContext } from "../store";
import { Button, Modal } from "./commons";

const Header = () => {
  const { items } = useContext(CartContext);
  const { showCart } = useContext(UserProgressContext);

  const cartCount = items.reduce((acc, curr) => acc + curr.quantity, 0);

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={logo} alt="FOOD-LOGO" />
          <h1>REACTFOOD</h1>
        </div>
        <nav>
          <Button textOnly onClick={showCart}>{`Cart(${cartCount})`}</Button>
        </nav>
      </header>
    </>
  );
};

export default Header;
