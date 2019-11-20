import React, { Component } from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";

const ArrowBtnWrapper = styled.div`
  display: block;
  position: absolute;
  right: 120px;
  bottom: 0;
  z-index: 10;
  padding: 30px 0;
`;

const ButtonLeft = styled.button`
  @media ${device.large} {
    margin: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 40px;
    height: 40px;
    right: 64px;
  }
  display: inline-block;
  transition: color 0.2s;
  outline: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  padding: 0;
  line-height: 0;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 0;
`;

const ButtonRight = styled.button`
  @media ${device.large} {
    margin: 0;
    background: rgba(0, 0, 0, 0.4);
    width: 40px;
    height: 40px;
    right: 24px;
  }
  display: inline-block;
  transition: color 0.2s;
  outline: none;
  border: 0;
  border-radius: 0;
  cursor: pointer;
  padding: 0;
  line-height: 0;
  color: hsla(0, 0%, 100%, 0.5);
  font-size: 0;
`;

const SpanLeft = styled.span`
  ::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    left: 10px;
    top: 8px;
    transform: translate(-50%, -50%) rotateZ(45deg);
    transition: all 0.4s;
  }
`;

const SpanRight = styled.span`
  ::before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    left: 10px;
    top: 8px;
    transform: translate(-50%, -50%) rotateZ(90deg);
    transition: all 0.4s;
  }
`;

class ArrowBtn extends Component {
  render() {
    return (
      <ArrowBtnWrapper>
        <ButtonLeft>
          <SpanLeft />
        </ButtonLeft>
        <ButtonRight>
          <SpanRight />
        </ButtonRight>
      </ArrowBtnWrapper>
    );
  }
}

export default ArrowBtn;
