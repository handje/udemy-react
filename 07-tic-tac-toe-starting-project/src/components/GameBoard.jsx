import React, { useState } from "react";
const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const GameBoard = ({ currPlayerSymbol, changePlayer }) => {
  const [gameBoard, setGameBoard] = useState(initialGameBoard);

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameBoard((prevBoard) => {
      const updateBoard = [...prevBoard.map((prev) => [...prev])]; //이중배열 복사
      updateBoard[rowIndex][colIndex] = currPlayerSymbol;
      return updateBoard;
    });
    changePlayer();
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
