import { useState } from "react";

import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";
import { log } from "./log.js";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import KeyCounter from "./components/Counter/KeyCounter.jsx";

function App() {
  log("<App /> rendered");
  const [chosenCount, setChosenCount] = useState(0);

  const handleSetCount = (newCount) => {
    setChosenCount(newCount);
    console.log(newCount); //이전count값이 출력, state가 바로 바뀌지 않음
  };
  //컴포넌트의 key속성을 추가하면 key값이 바뀔때마다 컴포넌트 초기화(재실행)
  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSetCount={handleSetCount} />
        {/* <Counter initialCount={chosenCount} /> */}
        <KeyCounter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
