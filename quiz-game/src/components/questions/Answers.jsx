import React, { useRef } from "react";

const Answers = ({
  answers,
  handleSelectAnswer,
  selectedAnswer,
  answerState,
}) => {
  const randomOrderedAnswers = useRef();

  if (!randomOrderedAnswers.current) {
    randomOrderedAnswers.current = [...answers].sort(() => Math.random() - 0.5);
  }

  return (
    <ul id="answers">
      {randomOrderedAnswers.current.map((answer) => {
        let buttonCss = "";
        const isSelected = answer === selectedAnswer;

        if (isSelected && answerState === "answered") {
          buttonCss = "selected";
        }

        if (
          isSelected &&
          (answerState === "wrong" || answerState === "correct")
        ) {
          buttonCss = answerState;
        }
        return (
          <li className="answer" key={answer}>
            <button
              onClick={() => {
                handleSelectAnswer(answer);
              }}
              className={buttonCss}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Answers;
