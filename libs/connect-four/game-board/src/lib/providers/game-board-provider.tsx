import { ParentComponent, createContext, useContext } from 'solid-js';
import { createStore, produce } from 'solid-js/store';

type Player = {
  score: number;
  label: string;
};

type GameBoardState = {
  player1: Player & { playerId: 1; color: 'royal-purple' };
  player2: Player & { playerId: 2; color: 'pastel-yellow' };
  currentPlayer: 1 | 2;
  timeLeft: number;
  board: number[][];
};

const makeGameBoardContext = (initialState: GameBoardState) => {
  const [state, setState] = createStore(initialState);

  const changeCurrentPlayer = () => {
    setState('currentPlayer', (c) => (c === 1 ? 2 : 1));
  };

  const increasePlayerScore = (playerId: 1 | 2) => {
    setState(playerId === 1 ? 'player1' : 'player2', 'score', (s) => s + 1);
  };

  const decreaseTimeLeft = () => {
    setState('timeLeft', (t) => t - 1);
  };

  const resetTimeLeft = () => {
    setState('timeLeft', 15);
  };

  const resetBoard = () => {
    setState(
      'board',
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
      'board',
      produce((b) => (b[row][column] = playerId)),
    );
  };

  return [
    state,
    {
      confirmMove,
      resetBoard,
      changeCurrentPlayer,
      increasePlayerScore,
      decreaseTimeLeft,
      resetTimeLeft,
    },
  ] as const;
};

type GameBoardContextType = ReturnType<typeof makeGameBoardContext>;

const GameBoardContext = createContext<GameBoardContextType>();

export const useGameBoard = () => useContext(GameBoardContext);

const initialState = {
  player1: {
    playerId: 1,
    color: 'royal-purple',
    score: 0,
    label: 'Player 1',
  },
  player2: {
    playerId: 2,
    color: 'pastel-yellow',
    score: 0,
    label: 'Player 2',
  },
  currentPlayer: 1,
  timeLeft: 15,
  board: Array.from({ length: 6 }, () => Array.from({ length: 7 }, () => 0)),
} as const;

const GameBoardProvider: ParentComponent = ({ children }) => {
  const value = makeGameBoardContext(initialState);
  return (
    <GameBoardContext.Provider value={value}>
      {children}
    </GameBoardContext.Provider>
  );
};

export default GameBoardProvider;
