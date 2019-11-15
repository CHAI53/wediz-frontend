import React, { Component } from "react";
import styled from "styled-components";

const CardWrap = styled.li`
  @media screen and (min-width: 960px) {
    float: left;
    width: 300px;
    padding: 0 15px;
  }

  position: relative;
  margin-bottom: 16px;
`;

const ButtonWrap = styled.div`
  @media screen and (min-width: 960px) {
    right: 25px;
  }

  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 100;
`;

const SmallMenu = styled.button`
  padding: 0;
  color: #fff;
  font-size: 20px;
  background: none;
  border: none;
  cursor: pointer;
`;

class ProjectItems extends Component {
  render() {
    return (
      <CardWrap>
        <ButtonWrap>
          <SmallMenu></SmallMenu>
        </ButtonWrap>
      </CardWrap>
    );
  }
}

export default ProjectItems;
