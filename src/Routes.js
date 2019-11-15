import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import ProjectView from "./Pages/ProjectView/ProjectView";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/projectview" component={ProjectView} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
