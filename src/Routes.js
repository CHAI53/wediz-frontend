import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import rewardRegistration from "./Pages/rewardRegistration/rewardRegistration";
import MakerMaking from "./Pages/MakerMaking/MakerMaking";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/test" component={rewardRegistration} />
          <Route exact path="/maker" component={MakerMaking} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
