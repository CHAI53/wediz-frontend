import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import EmailSignup from "Pages/EmailSignup";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={EmailSignup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
