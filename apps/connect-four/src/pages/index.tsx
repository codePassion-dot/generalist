import { Route, Router } from "@solidjs/router";
import App from "../App";
import HomePage from "./home";
import RulesPage from "./rules";
import GameBoardPage from "./game-board";

const Pages = () => {
  return (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/rules" component={RulesPage} />
      <Route path="/game-board" component={GameBoardPage} />
    </Router>
  );
};

export default Pages;
