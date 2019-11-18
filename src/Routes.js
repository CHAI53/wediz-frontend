import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import MakerMaking from "./Pages/MakerMaking/MakerMaking";
import EmailSignup from "Pages/EmailSignup";
import MakerStudioPage from "./Pages/MakerStudioPage";
import TestOne from "./Pages/Testing";

import MyProfile from "./Pages/MyProfile";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/maker" component={MakerMaking} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={EmailSignup} />
          <Route exact path="/funding" component={MakerStudioPage} />
          <Route exact path="/experiments" component={TestOne} />
          <Route exact path="/myprofile" component={MyProfile} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
