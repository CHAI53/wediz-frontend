import React, { Component } from "react";
import styled from "styled-components";

class MainPhoto extends Component {
  render() {
    return (
      <MainPhotoContainer>
        <MainPic src={this.props.photo}></MainPic>
      </MainPhotoContainer>
    );
  }
}

export default MainPhoto;

const MainPic = styled.img`
  width: 100%;
`;

const MainPhotoContainer = styled.div`
  display: flex;
  justify-items: center;
  width: 100%;
  height: 500px;
  padding: 0 300px;
  z-index: -1;
`;
