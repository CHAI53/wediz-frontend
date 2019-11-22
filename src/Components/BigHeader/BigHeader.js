import React, { Component } from "react";
import styled from "styled-components";
import data from "./SlideData";
import { device, color } from "Styles/Common.js";

class BigHeader extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      headline: data[0].headline,
      path: data[0].path
    };
  }

  moveSlider = (e, point = 1) => {
    let nextI = this.state.i;
    nextI += point;
    clearInterval(this.interval);

    this.interval = setInterval(() => this.moveSlider(null), 3000);

    setTimeout(this.interval, 1000);

    if (nextI >= data.length) {
      nextI = 0;
    }
    if (nextI < 0) {
      nextI = data.length - 1;
    }
    this.setState({
      i: nextI,
      headline: data[nextI].headline,
      path: data[nextI].path
    });
  };

  indicatorClick = e => {
    const index = Number(e.target.dataset.index);
    clearInterval(this.interval);
    setTimeout(() => {
      this.interval = setInterval(() => {
        this.moveSlider(null);
      }, 3000);
    }, 1000);

    this.setState({
      i: index,
      headline: data[index].headline,
      path: data[index].path
    });
  };

  render() {
    return (
      <Container>
        <Slider>
          <Title>클래식의 대명사 메일백의 재해석</Title>
          <ArrowBtnWrapper>
            <ButtonLeft onClick={e => this.moveSlider(e, -1)}>
              <SpanLeft />
            </ButtonLeft>
            <ButtonRight onClick={e => this.moveSlider(e, 1)}>
              <SpanRight />
            </ButtonRight>
          </ArrowBtnWrapper>
        </Slider>
      </Container>
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

const Title = styled.div`
  @media ${device.largeMin} {
    padding: 0 100px;
  }
  @media ${device.smallMin} {
    width: 440px;
    line-height: 40px;
    font-size: 32px;
    font-weight: 700;
  }
  display: block;
  position: absolute;
  bottom: 15%;
  left: 25%;
  transform: translate(-50%);
  width: 100%;
  max-width: 1440px;
  margin-bottom: 8px;
  width: 280px;
  line-height: 28px;
  font-size: 21px;
  font-weight: 500;
  color: #fff;
`;

const Container = styled.div`
  height: 380px;
  position: relative;
`;

const Slider = styled.div`
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${data[0].path});
`;

export default BigHeader;
