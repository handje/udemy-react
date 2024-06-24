import React from "react";

import quizLogo from "../assets/quiz-logo.png";
const Header = () => {
  return (
    <header>
      <img src={quizLogo} alt="Quiz logo" />
      <h1>REACTQUIZ</h1>
    </header>
  );
};

export default Header;
