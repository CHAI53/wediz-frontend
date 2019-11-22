import React from "react";
import styled, { css } from "styled-components";
import HeaderForMakerStudio from "./HeaderForMakerStudio.js";
import MakerStudioNav from "./MakerStudioNav.js";
import navCategoryForMakerStudio from "Datas/CategoryForMakerStudio.js";
import FundingStory from "../../Components/FundingStory.js";

class MakerStudioPage extends React.Component {
  state = {
    category: navCategoryForMakerStudio.category,
    detect: "funding",
    list: navCategoryForMakerStudio.list1
  };
  handleAddress = data => {
    console.log("handleAddress 작동");
    this.setState({
      address: data
    });
  };
  render() {
    return (
      <>
        <HeaderForMakerStudio />
        <MainArticleContainer>
          <MakerStudioNav
            navCategory={this.state}
            getAddress={this.handleAddress}
          />
          <FundingStory />
        </MainArticleContainer>
      </>
    );
  }
}

export default MakerStudioPage;
const MainArticleContainer = styled.div`
  width: 80%;
  background-color: white;
  display: flex;
  position: relative;
  top: 55px;
`;
