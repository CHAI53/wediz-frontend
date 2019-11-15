import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
<<<<<<< HEAD
import ProjectView from "./Pages/ProjectView/ProjectView";
=======
import MainPage from "./Pages/MainPage";
import MakerMaking from "./Pages/MakerMaking/MakerMaking";
import EmailSignup from "Pages/EmailSignup";
>>>>>>> 9d1d9b9dfe42df70dff27a8baca16d5c85c0dd93

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/projectview" component={ProjectView} />
          <Route exact path="/" component={MainPage} />
          <Route exact path="/maker" component={MakerMaking} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={EmailSignup} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
