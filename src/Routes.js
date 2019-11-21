import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import MakerMaking from "./Pages/MakerMaking/MakerMaking";
import EmailSignup from "Pages/EmailSignup";
import MakerStudioPage from "./Pages/MakerStudioPage";
import TestOne from "./Pages/Testing";
import FundingStory from "./Components/FundingStory.js";
import MyEditor from "./Components/MyEditor";
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
          <Route
            exact
            path="/maker/studio/funding/:id"
            component={MakerStudioPage}
          />
          <Route exact path="/experiments" component={TestOne} />
          <Route
            exact
            path="/maker/studio/funding/story"
            component={FundingStory}
          />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/editor" component={MyEditor} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
