import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { deriveActivePlayer, deriveGameBoard, deriveWinner } from "./helper";

const PLAYERS = {
  X: "Player1",
  O: "Player2",
};

function App() {
  const [gameTurns, setGameTurns] = useState([]);

  const [players, setPlayers] = useState(PLAYERS);
  const activePlayer = deriveActivePlayer(gameTurns);
  let gameBoard = deriveGameBoard(gameTurns);

  let winner = deriveWinner(gameBoard, players);
  let isDraw = gameTurns.length === 9 && !winner;

  const handleSelectSquare = (rowIndex, colIndex) => {
    setGameTurns((prevGame) => {
      const currPlayer = deriveActivePlayer(prevGame);
      const updateGame = [
        { board: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevGame,
      ];
      return updateGame;
    });
  };

  const handleRestart = () => {
    setGameTurns([]);
  };

  const handleChangePlayer = (symbol, newName) => {
    setPlayers((prevPlayers) => {
      return {
        ...prevPlayers,
        [symbol]: newName,
      };
    });
  };

  return (
    <div>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
            onChangePlayer={handleChangePlayer}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
            onChangePlayer={handleChangePlayer}
          />
        </ol>
        {(winner || isDraw) && (
          <GameOver winner={winner} onRestart={handleRestart} />
        )}
        <GameBoard gameBoard={gameBoard} onSelectSquare={handleSelectSquare} />
      </div>
      <Log gameTurns={gameTurns} />
    </div>
  );
}

export default App;
