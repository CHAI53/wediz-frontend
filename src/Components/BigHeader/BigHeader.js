import React, { Component } from "react";
import styled from "styled-components";
import slideData from "./SlideData";
import ArrowBtn from "Components/ArrowBtn";

class BigHeader extends Component {
  constructor() {
    super();
    this.state = {
      i: 0,
      headline: slideData[0].headline,
      path: slideData[0].path
    };
  }

  render() {
    return (
      <Container>
        <Slider>
          <ArrowBtn />
        </Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 380px;
  position: relative;
`;

//background-image: url(${slideData.path});
// transform: traslate3d (-8824px, 0px, 0px);
// transition: transform 500ms ease 0s;
// 1103 2206 3309 4412 5515 6618 7721 8824 9927

const Slider = styled.div`
  width: 100%;
  height: 380px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${slideData[0].path});
`;

export default BigHeader;
