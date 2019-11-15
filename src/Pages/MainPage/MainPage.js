import React, { Component } from "react";
import NavBar from "Components/NavBar";
import BigHeader from "Components/BigHeader/BigHeader";

class MainPage extends Component {
  render() {
    return (
      <main>
        <NavBar />
        <BigHeader />
      </main>
    );
  }
}

export default MainPage;
