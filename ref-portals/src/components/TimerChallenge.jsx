import { useState, useRef } from "react";
import ResultModal from "./ResultModal";

const TimerChallenge = ({ title, target }) => {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  const handleStart = () => {
    setTimerStarted(true);
    console.log("timer start!");
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, target * 1000);
  };
  const handleStop = () => {
    clearTimeout(timer.current);
    console.log("timer stop!");
  };
  return (
    <>
      <ResultModal ref={dialog} result="lost" target={target} />
      <div className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {target} second{target > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "Time is running..." : "Timer inactive"}
        </p>
      </div>
    </>
  );
};

export default TimerChallenge;
