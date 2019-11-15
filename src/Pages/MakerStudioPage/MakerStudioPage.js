import React from "react";
import HeaderForMakerStudio from "Components/HeaderForMakerStudio";
import MainArticle from "./MainArticle";

class MakerStudio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <HeaderForMakerStudio />
        <MainArticle />
      </>
    );
  }
}

export default MakerStudio;
