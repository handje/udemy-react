import React from "react";

const Stats = () => {
  return (
    <div id="summary-stats">
      <div>
        <p className="number">29%</p>
        <p className="text">skipped</p>
      </div>
      <div>
        <p className="number">29%</p>
        <p className="text">answered correctly</p>
      </div>
      <div>
        <p className="number">29%</p>
        <p className="text">answered incorrectly</p>
      </div>
    </div>
  );
};

export default Stats;
