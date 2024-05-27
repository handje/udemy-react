import { useState } from "react";

import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const handleChangePlayer = () => {
    setActivePlayer((currPlayer) => (currPlayer === "X" ? "O" : "X"));
    console.log(activePlayer);
  };

  return (
    <div>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
        <GameBoard
          currPlayerSymbol={activePlayer}
          changePlayer={handleChangePlayer}
        />
      </div>
      log
    </div>
  );
}

export default App;
