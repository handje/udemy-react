import React, { useState } from "react";

import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";

const Question = ({
  questionText,
  answers,
  onSelectAnswer,
  answerState,
  selectedAnswer,
  onSkipAnswer,
}) => {
  return (
    <div id="question">
      <QuestionTimer timeout={5000} onTimeout={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        handleSelectAnswer={onSelectAnswer}
        selectedAnswer={selectedAnswer}
        answerState={answerState}
      />
    </div>
  );
};

export default Question;
