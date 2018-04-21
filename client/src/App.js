import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Jornals from "./pages/Jornals";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Jornals} />
        <Route exact path="/jornals" component={Jornals} />
        <Route exact path="/jornals/:id" component={Detail} />
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
