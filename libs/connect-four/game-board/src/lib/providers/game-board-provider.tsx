import { ParentComponent, createContext, useContext } from 'solid-js';
import { createStore } from 'solid-js/store';

type Player = {
  score: number;
  label: string;
};

type GameBoardState = {
  player1: Player & { playerId: 1 };
  player2: Player & { playerId: 2 };
  currentPlayer: 1 | 2;
  timeLeft: number;
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
  return [
    state,
    {
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
    score: 0,
    label: 'Player 1',
  },
  player2: {
    playerId: 2,
    score: 0,
    label: 'Player 2',
  },
  currentPlayer: 1,
  timeLeft: 15,
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
