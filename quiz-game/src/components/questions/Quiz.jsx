import React, { useCallback, useState } from "react";

import Completed from "../completed/Completed.jsx";
import QUESTIONS from "../../questions.js";
import Question from "./Question.jsx";

const Quiz = () => {
  const [userAnswers, setUserAnswers] = useState([]);
  const [answerState, setAnswerState] = useState("");
  const currentQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;

  const handleSelectAnswer = useCallback((answer) => {
    setAnswerState("answered");
    setUserAnswers((prev) => [...prev, answer]);

    setTimeout(() => {
      if (answer === QUESTIONS[currentQuestionIndex].answers[0]) {
        setAnswerState("correct");
      } else {
        setAnswerState("wrong");
      }

      setTimeout(() => {
        setAnswerState("");
      }, 1000);
    }, 1000);
  }, []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (currentQuestionIndex === QUESTIONS.length) {
    return <Completed userAnswers={userAnswers} />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        questionText={QUESTIONS[currentQuestionIndex].text}
        answers={QUESTIONS[currentQuestionIndex].answers}
        onSelectAnswer={handleSelectAnswer}
        answerState={answerState}
        onSkipAnswer={handleSkipAnswer}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
      />
    </div>
  );
};

export default Quiz;
