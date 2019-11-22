import React, { Component } from "react";
import styled from "styled-components";
import { color, device } from "Styles/Common.js";
import slideData from "Components/BigHeader/SlideData";

class ArrowBtn extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      headline: slideData[0].headline,
      path: slideData[0].path
    };
  }

  moveSlider = (e, point = 1) => {
    let nextI = this.state.i;
    nextI += point;
    clearInterval(this.interval);
    this.interval = setInterval(() => this.moveSlider(null), 3000);
    setTimeout(this.interval, 1000);

    if (nextI >= slideData.length) {
      nextI = 0;
    }
    if (nextI < 0) {
      nextI = slideData.length - 1;
    }
    this.setState({
      i: nextI,
      headline: slideData[nextI].headline,
      path: slideData[nextI].path
    });
  };

  render() {
    return (
      <ArrowBtnWrapper>
        <ButtonLeft onClick={e => this.moveSlider(e, -1)}>
          <SpanLeft />
        </ButtonLeft>
        <ButtonRight onClick={e => this.moveSlider(e, 1)}>
          <SpanRight />
        </ButtonRight>
      </ArrowBtnWrapper>
    );
  }
}

const ArrowBtnWrapper = styled.div`
  @media ${device.large} {
    display: none;
    right: 0;
  }
  display: block;
  right: 120px;
  position: absolute;
  bottom: 0;
  z-index: 10;
  padding: 30px 0;
`;

const ButtonLeft = styled.button`
  position: relative;
  margin: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 40px;
  height: 40px;
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
  position: relative;
  margin: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 40px;
  height: 40px;
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
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-right: 1px solid #b5b5b5;
  border-bottom: 1px solid #b5b5b5;
  left: 20px;
  top: 20px;
  transform: translate(-50%, -50%) rotateZ(135deg);
  transition: all 0.4s;
  :hover {
    border-right: 1px solid ${color.white};
    border-bottom: 1px solid ${color.white};
  }
`;

const SpanRight = styled.span`
  content: "";
  position: absolute;
  width: 10px;
  height: 10px;
  border-right: 1px solid #b5b5b5;
  border-bottom: 1px solid #b5b5b5;
  left: 15px;
  top: 20px;
  transform: translate(-50%, -50%) rotateZ(315deg);
  transition: all 0.01s;
  :hover {
    border-right: 1px solid ${color.white};
    border-bottom: 1px solid ${color.white};
  }
`;

export default ArrowBtn;
