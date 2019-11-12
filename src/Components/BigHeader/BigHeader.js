import React, { Component } from "react";
import styled from "styled-components";

class BigHeader extends Component {
  render() {
    return (
      <Container>
        <Slider></Slider>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 380px;
`;

const Slider = styled.div`
  height: 380px;
  background-image: url("https://cdn.wadiz.kr/ft/images/green001/2019/1109/20191109092255271_1207.jpg/wadiz/optimize/");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export default BigHeader;
