import React, { Component } from "react";
import styled from "styled-components";
// import "./MainArticleForDetailPage.scss";
import SingleImage from "./SingleImage.js";

class MainArticleForDetailPage extends Component {
  render() {
    const allImage = this.props.photo.map((src, index) => (
      <SingleImage src={src} key={index} />
    ));
    console.log(this.props.length);
    return (
      <MainArticleContainer>
        <ImageSliderContainer length={this.props.length}>
          <ImageSlider>
            <Figure length={this.props.length}>{allImage}</Figure>
          </ImageSlider>
        </ImageSliderContainer>
        <TextContainer>asdadasdasdasd</TextContainer>
      </MainArticleContainer>
    );
  }
}

export default MainArticleForDetailPage;
const MainArticleContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const TextContainer = styled.div`
  margin-top: 50px;
`;

const ImageSliderContainer = styled.div`
  @keyframes slidy {
    0% {
      left: 0%;
    }
    /* 10% {
      left: -100%;
    }
    15% {
      left: -100%;
    }
    20% {
      left: -200%;
    }
    25% {
      left: -200%;
    }
    30% {
      left: -300%;
    }
    35% {
      left: -350%;
    }
    40% {
      left: -400%;
    }
    45% {
      left: -450%;
    }
    50% {
      left: -500%;
    }
    55% {
      left: -550%;
    }
    60% {
      left: -600%;
    }
    65% {
      left: -650%;
    }
    70% {
      left: -700%;
    }
    75% {
      left: -750%;
    }
    80% {
      left: -800%;
    }
    85% {
      left: -850%;
    }
    90% {
      left: -900%;
    }
     */
    95% {
      left: -1000%;
    }
    100% {
      left: 0%;
    }
  }
  /* position: sticky;
  top: 300px; */
  width: 40%;
  margin-top: 50px;
`;
const ImageSlider = styled.div`
  overflow: hidden;
`;

const Figure = styled.figure`
  position: relative;
  width: 1000%;
  margin: 0;
  left: 0;
  text-align: left;
  font-size: 0;
  animation: 60s slidy infinite;
`;
