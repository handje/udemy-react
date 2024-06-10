import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

const ResultModal = forwardRef(({ target, remains, onReset }, ref) => {
  const dialog = useRef();
  const score = Math.round((1 - remains / (target * 1000)) * 100);
  const remainTime = (remains / 1000).toFixed(2);
  useImperativeHandle(ref, () => {
    return {
      open: () => {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog} className="result-modal" onClose={onReset}>
      {remains <= 0 ? <h2>You lost</h2> : <h2>Your Score : {score}</h2>}

      <p>
        The target time was <strong>{target} seconds</strong>
      </p>
      <p>
        You stopped the timer with <strong>{remainTime} seconds left</strong>
      </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});

export default ResultModal;
