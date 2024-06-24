import React from "react";

const Result = () => {
  return (
    <div>
      <ol>
        <li>
          <h3>1</h3>
          <p className="question">
            Which of the following definitions best describes React.js?
          </p>
          <p className="user-answer skipped">skip</p>
        </li>
        <li>
          <h3>2</h3>
          <p className="question">What purpose do React hooks serve?</p>
          <p className="user-answer correct">correct</p>
        </li>
        <li>
          <h3>3</h3>
          <p className="question">Can you identify what JSX is?</p>
          <p className="user-answer wrong">wrong</p>
        </li>
      </ol>
    </div>
  );
};

export default Result;
