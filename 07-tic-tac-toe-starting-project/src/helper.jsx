import { WINNING_COMBINATIONS } from "./winning-combinations";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export const deriveActivePlayer = (gameTurns) => {
  let currPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }
  return currPlayer;
};

export const deriveWinner = (gameBoard, players) => {
  let winner;
  for (const combi of WINNING_COMBINATIONS) {
    const first = gameBoard[combi[0].row][combi[0].column];
    const second = gameBoard[combi[1].row][combi[1].column];
    const third = gameBoard[combi[2].row][combi[2].column];

    if (first && first === second && first === third) {
      winner = players[first];
    }
  }
  return winner;
};

export const deriveGameBoard = (gameTurns) => {
  let gameBoard = [...INITIAL_GAME_BOARD.map((arr) => [...arr])];
  for (const turn of gameTurns) {
    const { board, player } = turn;
    const { row, col } = board;
    gameBoard[row][col] = player;
  }
  return gameBoard;
};
