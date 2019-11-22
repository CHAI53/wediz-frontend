import React, { Component } from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";

class RewardItem extends Component {
  render() {
    return (
      <RewardCard>
        <RewardImg></RewardImg>
      </RewardCard>
    );
  }
}

const RewardImg = styled.span`
  @media ${device.smallMin} {
    border-radius: 3px;
    float: none;
    margin-right: 0;
    margin-bottom: 10px;
    padding-top: 56.25%;
    width: 100%;
    height: auto;
  }
  display: block;
  position: relative;
  float: left;
  z-index: 3;
  background: #dadce0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const RewardCard = styled.div`
  @media ${device.smallMin} {
    margin: 0;
    width: auto;
    clear: both;
    display: block;
    padding-bottom: 18px;
    min-height: auto;
  }
  display: block;
  position: relative;
  clear: both;
  white-space: normal;
`;

export default RewardItem;
