import React from "react";

const Log = ({ gameTurns }) => {
  return (
    <ol id="log">
      {gameTurns.map((turn) => (
        <li key={`${turn.board.row}${turn.board.col}`}>
          {turn.player} selected {turn.board.row},{turn.board.col}
        </li>
      ))}
    </ol>
  );
};

export default Log;
