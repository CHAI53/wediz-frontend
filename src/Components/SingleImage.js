import React, { Component } from "react";
import styled from "styled-components";

class SingleImage extends Component {
  render() {
    return (
      <>
        <ImageForSlider src={this.props.src}></ImageForSlider>
      </>
    );
  }
}

export default SingleImage;
const ImageForSlider = styled.img`
  width: 10%
  float: left;
  height: 500px;
`;
