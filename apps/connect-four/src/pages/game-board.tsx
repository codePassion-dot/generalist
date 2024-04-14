import {
  GameBoardHeader,
  PlayersVs,
} from "@generalist/connect-four/game-board";

const GameBoardPage = () => {
  return (
    <main class="h-screen overflow-hidden bg-violet-blue">
      <GameBoardHeader />
      <PlayersVs />
    </main>
  );
};

export default GameBoardPage;
