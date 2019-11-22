import React, { Component } from "react";
import styled from "styled-components";
//import slideData from "slideData";
import ArrowBtn from "Components/ArrowBtn";

const Container = styled.div`
  height: 380px;
`;

//background-image: url(${slideData.path});

const Slider = styled.div`
  height: 380px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  transform: traslate3d (-8824px, 0px, 0px);
  transition: transform 500ms ease 0s;
`;
// 1103 2206 3309 4412 5515 6618 7721 8824 9927

class BigHeader extends Component {
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

export default BigHeader;
