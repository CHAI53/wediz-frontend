import React, { Component } from "react";
import NavBar from "Components/NavBar";
import BigHeader from "Components/BigHeader";
import Footer from "Components/Footer";
import CategoryBar from "./CategoryBar";
import RewardView from "./RewardView";
// import AfterLoginNav from "Components/AfterLoginNav";
// import { isUserLoggedIn } from "Utils/Utils";

class MainPage extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <BigHeader />
        <CategoryBar />
        <RewardView />
        <Footer />
      </main>
    );
  }
}

export default MainPage;
