import { ParentComponent, createContext, useContext } from "solid-js";
import { createStore, produce } from "solid-js/store";

type Player = {
  score: number;
  label: string;
};

type GameBoardState = {
  player1: Player & { playerId: 1; color: "royal-purple" };
  player2: Player & { playerId: 2; color: "pastel-yellow" };
  currentPlayer: 1 | 2;
  timer: { timeLeft: number; paused: boolean };
  board: number[][];
};

const makeGameBoardContext = (initialState: GameBoardState) => {
  const [state, setState] = createStore(initialState);

  const changeCurrentPlayer = () => {
    setState("currentPlayer", (c) => (c === 1 ? 2 : 1));
  };

  const increasePlayerScore = (playerId: 1 | 2) => {
    setState(playerId === 1 ? "player1" : "player2", "score", (s) => s + 1);
  };

  const decreaseTimeLeft = () => {
    setState("timer", "timeLeft", (t) => t - 1);
  };

  const resetTimeLeft = () => {
    setState("timer", "timeLeft", 15);
  };

  const resetGame = () => {
    setState("currentPlayer", 1);
    setState("timer", { timeLeft: 15, paused: false });
    setState(
      "board",
      Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => 0)),
    );
  };

  const confirmMove = ({
    row,
    column,
    playerId,
  }: {
    row: number;
    column: number;
    playerId: 1 | 2;
  }) => {
    setState(
      "board",
      produce((b) => (b[row][column] = playerId)),
    );
  };

  const pauseTimer = () => {
    setState("timer", "paused", true);
  };

  const continueTimer = () => {
    setState("timer", "paused", false);
  };

  return [
    state,
    {
      pauseTimer,
      continueTimer,
      confirmMove,
      resetGame,
      changeCurrentPlayer,
      increasePlayerScore,
      decreaseTimeLeft,
      resetTimeLeft,
    },
  ] as const;
};

type GameBoardContextType = ReturnType<typeof makeGameBoardContext>;

const GameBoardContext = createContext<GameBoardContextType>();

export const useGameBoard = () => {
  const gameBoardContext = useContext(GameBoardContext);
  if (!gameBoardContext) {
    throw new Error(
      "Please wrap your application with GameBoardContext.Provider",
    );
  }
  return gameBoardContext;
};

const initialState = {
  player1: {
    playerId: 1,
    color: "royal-purple",
    score: 0,
    label: "Player 1",
  },
  player2: {
    playerId: 2,
    color: "pastel-yellow",
    score: 0,
    label: "Player 2",
  },
  currentPlayer: 1,
  timer: {
    timeLeft: 15,
    paused: false,
  },
  board: Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => 0)),
} as const;

const GameBoardProvider: ParentComponent = (props) => {
  const value = makeGameBoardContext(initialState);
  return (
    <GameBoardContext.Provider value={value}>
      {props.children}
    </GameBoardContext.Provider>
  );
};

export default GameBoardProvider;
