import React from "react";
import investmentLogo from "../assets/investment-calculator-logo.png";
const Header = () => {
  return (
    <header id="header">
      <img src={investmentLogo} alt="investment-logo" />
      <h1>React Investment Calculator</h1>
    </header>
  );
};

export default Header;
