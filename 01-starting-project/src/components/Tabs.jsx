import React from "react";
import TabButton from "./TabButton";

const Tabs = ({ buttons, children, ButtonsContainer = "menu" }) => {
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
};

export default Tabs;
