import React, { Component } from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";
// import "./MainArticleForDetailPage.scss";
import SingleImage from "./SingleImage.js";
import RewardListDisplayed from "./RewardListDisplayed.js";

class MainArticleForDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reward: [
        {
          id: "1",
          name: "운동화1",
          price: "100000",
          introduction: "아주 편해용 ",
          stock: "100",
          scheduled_date: "내일",
          option: "블랙"
        },
        {
          id: "2",
          name: "운동화1",
          price: "100000",
          introduction: "아주 편해용 ",
          stock: "100",
          scheduled_date: "내일",
          option: "화이트"
        },
        {
          id: "2",
          name: "운동화1",
          price: "100000",
          introduction: "아주 편해용 ",
          stock: "100",
          scheduled_date: "내일",
          option: "화이트"
        },
        {
          id: "2",
          name: "운동화1",
          price: "100000",
          introduction: "아주 편해용 ",
          stock: "100",
          scheduled_date: "내일",
          option: "화이트"
        }
      ]
    };
  }

  //   componentDidMount() {
  //     axios("http://10.58.5.176:8000/fund/reward")
  //     .then(res => {
  //         console.log("date from fetch===", res)
  //         this.setState({
  //         })
  //     })

  // console.log("paramRendered===", this.props.match)

  //   }
  render() {
    const allImage = this.props.photo.map((src, index) => (
      <SingleImage src={src} key={index} />
    ));
    const rewardList = this.state.reward.map((reward, index) => (
      <RewardListDisplayed key={index} data={reward} />
    ));
    console.log(this.props.length);
    return (
      <>
        <ImageSliderContainer length={this.props.length}>
          <ImageSlider>
            <Figure length={this.props.length}>
              {this.props.photo && allImage}
            </Figure>
            <RewardContainer>{this.state.reward && rewardList}</RewardContainer>
          </ImageSlider>
        </ImageSliderContainer>

        <MainArticleContainer>
          <TextContainer>
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here display props of html code in here display props of html code
            in here display props of html code in here display props of html
            code in here display props of html code in here display props of
            html code in here display props of html code in here display props
            of html code in here display props of html code in here display
            props of html code in here display props of html code in here
            display props of html code in here display props of html code in
            here
          </TextContainer>
        </MainArticleContainer>
      </>
    );
  }
}

export default MainArticleForDetailPage;
const MainArticleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  position: relative;
`;
const RewardContainer = styled.div`
  width: 30%;
  padding: 30px 30px 30px 30px;
  display: flex;
  flex-wrap: wrap;
  z-index: 0;
`;
const TextContainer = styled.div`
  /* margin-top: 20px; */
  width: 63%;
  margin-right: 52px;
  margin-top: -150px;
  z-index: -1;
  position: relative;
  top: -992px;
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
  position: sticky;
  top: 0;
  width: 97%;
  margin-top: 50px;
`;
const ImageSlider = styled.div`
  overflow: hidden;
  margin-top: 40px;
  margin-left: 40px;
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
