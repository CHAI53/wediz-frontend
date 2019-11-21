import React, { Component } from "react";
import CategoryForMakerStudio from "./CategoryForMakerStudio";
import styled from "styled-components";

class MainArticle extends Component {
  render() {
    return (
      <MainArticleContainer>
        <CategoryForMakerStudio />
      </MainArticleContainer>
    );
  }
}

export default MainArticle;

const MainArticleContainer = styled.div`
width: 100%
background-color: white;
width:240px;
`;
