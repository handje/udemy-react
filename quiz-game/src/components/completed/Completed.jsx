import React from "react";

import quizCompleted from "../../assets/quiz-complete.png";
import Stats from "./Stats";
import Result from "./Result";

const Completed = ({ userAnswers }) => {
  console.log(userAnswers);
  return (
    <div id="summary">
      <img src={quizCompleted} alt="complete logo" />
      <h2>QUIZ COMPLETED</h2>
      <Stats />
      <Result />
    </div>
  );
};

export default Completed;
//skipped
