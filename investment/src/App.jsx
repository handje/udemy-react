import React, { useState } from "react";
import Header from "./components/Header";
import InputContainer from "./components/userInput/InputContainer";
import ResultContainer from "./components/result/ResultContainer";

function App() {
  const [inputValue, setInputValue] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  return (
    <>
      <Header />
      <InputContainer inputValue={inputValue} setInputValue={setInputValue} />
      <ResultContainer inputValue={inputValue} />
    </>
  );
}

export default App;
