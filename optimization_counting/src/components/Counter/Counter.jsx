import React, { memo, useCallback, useState, useMemo } from "react";

import IconButton from "../UI/IconButton.jsx";
import MinusIcon from "../UI/Icons/MinusIcon.jsx";
import PlusIcon from "../UI/Icons/PlusIcon.jsx";
import CounterOutput from "./CounterOutput.jsx";
import { log } from "../../log.js";

function isPrime(number) {
  log("Calculating if is prime number", 2, "other");
  if (number <= 1) {
    return false;
  }

  const limit = Math.sqrt(number);

  for (let i = 2; i <= limit; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

//memo : 컴포넌트 함수를 감싸는 것 / 부모 재 렌더링이 일어날 경우 , 자식 재렌더링 방지 (속성값이 동일할때) => 속성 비교 과정 발생으로 작은프젝은 추천 x => 보통 컴포넌트 분리로 해결
// const Counter = memo(function Counter({ initialCount }) {});
const Counter = ({ initialCount }) => {
  log("<Counter /> rendered", 1);

  //useMemo : 큰 연산이 필요한 계산을 저장하고 재사용, 많이 사용하면 x
  const initialCountIsPrime = useMemo(
    () => isPrime(initialCount),
    [initialCount]
  );

  const [counter, setCounter] = useState(initialCount);

  const handleDecrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter - 1);
  }, []);

  const handleIncrement = useCallback(() => {
    setCounter((prevCounter) => prevCounter + 1);
  }, []);

  return (
    <section className="counter">
      <p className="counter-info">
        The initial counter value was <strong>{initialCount}</strong>. It
        <strong>is {initialCountIsPrime ? "a" : "not a"}</strong> prime number.
      </p>
      <p>
        <IconButton icon={MinusIcon} onClick={handleDecrement}>
          Decrement
        </IconButton>
        <CounterOutput value={counter} />
        <IconButton icon={PlusIcon} onClick={handleIncrement}>
          Increment
        </IconButton>
      </p>
    </section>
  );
};
export default Counter;
