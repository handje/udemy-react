import React, { useState, useEffect } from "react";

const ProgressBar = ({ TIMER }) => {
  const [remainTime, setRemainTime] = useState(TIMER);

  useEffect(() => {
    const interval = setInterval(() => {
      setRemainTime((prev) => prev - 10);
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <progress value={remainTime} max={TIMER} />;
};

export default ProgressBar;
