import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login";
import MainPage from "./Pages/MainPage";
import MakerMaking from "./Pages/MakerMaking/MakerMaking";
import EmailSignup from "Pages/EmailSignup";
import MyProfile from "./Pages/MyProfile";
import RewardList from "./Pages/RewardList";
import Purchase from "./Pages/Purchase";
import MakerStudioPage from "./Pages/MakerStudioPage";
class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/maker" component={MakerMaking} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={EmailSignup} />
          <Route exact path="/maker/funding/:id" component={MakerStudioPage} />
          <Route exact path="/myprofile" component={MyProfile} />
          <Route exact path="/rewardlist" component={RewardList} />
          <Route exact path="/purchase" component={Purchase} />
        </Switch>
      </Router>
    );
  }
}
export default Routes;
