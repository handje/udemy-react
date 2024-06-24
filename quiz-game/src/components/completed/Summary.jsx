import React from "react";

import quizCompleted from "../../assets/quiz-complete.png";
import QUESTION from "../../questions.js";

const Summary = ({ userAnswers }) => {
  const skipped = userAnswers.filter((answer) => answer === null);
  const correct = userAnswers.filter(
    (answer, idx) => answer === QUESTION[idx].answers[0]
  );
  const skippedShare = Math.round((skipped.length / userAnswers.length) * 100);
  const correctShare = Math.round((correct.length / userAnswers.length) * 100);
  const wrongShare = 100 - skippedShare - correctShare;

  return (
    <div id="summary">
      <img src={quizCompleted} alt="complete logo" />
      <h2>QUIZ COMPLETED</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedShare}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctShare}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongShare}%</span>
          <span className="text">answered incorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, idx) => {
          let cssClass = "user-answer";

          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTION[idx].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }

          return (
            <li key={answer}>
              <h3>{idx + 1}</h3>
              <p className="question">{QUESTION[idx].text}</p>
              <p className={cssClass}>{answer ?? "Skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
};

export default Summary;
