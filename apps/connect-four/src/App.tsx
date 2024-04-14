import { GameBoardProvider } from "@generalist/connect-four/game-board";
import { ParentComponent } from "solid-js";
import "solid-devtools";

const App: ParentComponent = (props) => {
  return <GameBoardProvider>{props.children}</GameBoardProvider>;
};

export default App;
