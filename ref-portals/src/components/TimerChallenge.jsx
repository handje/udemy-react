import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, target }) => {
  const timer = useRef();
  const dialog = useRef();
  const [remains, setRemains] = useState(target * 1000);

  let timerActive = remains > 0 && remains < target * 1000;

  if (remains <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  const handleReset = () => {
    setRemains(target * 1000);
  };
  const handleStart = () => {
    timer.current = setInterval(() => {
      setRemains((prev) => prev - 10);
    }, 10);
  };
  const handleStop = () => {
    dialog.current.open();
    clearInterval(timer.current);
  };

  return (
    <>
      <ResultModal
        ref={dialog}
        target={target}
        remains={remains}
        onReset={handleReset}
      />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} second{target > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActive ? handleStop : handleStart}>
            {timerActive ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerActive ? "active" : undefined}>
          {timerActive ? "Time is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
};

export default TimerChallenge;
