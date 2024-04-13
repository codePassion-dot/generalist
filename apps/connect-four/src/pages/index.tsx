import { Route, Router } from "@solidjs/router";
import App from "../App";
import HomePage from "./home";
import RulesPage from "./rules";

const Pages = () => {
  return (
    <Router root={App}>
      <Route path="/" component={HomePage} />
      <Route path="/rules" component={RulesPage} />
    </Router>
  );
};

export default Pages;
