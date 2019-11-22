import React, { Component } from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";
import menu from "Images/menuicon.png";

class ProjectItem extends Component {
  constructor() {
    super();
    this.state = {
      titlephoto: "",
      title: "",
      name: ""
    };
  }

  handleClick = () => {
    this.props.history.push("/maker/funding");
  };

  render() {
    const { titlephoto, title, name } = this.state;
    return (
      <Item>
        <Menu />
        <CardWrapper>
          <ImgSection titlephoto={titlephoto}>
            <Default>
              <Ment>대표이미지 등록 필요</Ment>
            </Default>
            <Reward>리워드</Reward>
            <InfoSection>
              <Title>{title}asdf</Title>
              <NameWrap>{name}asdf</NameWrap>
              <Status>펀딩 준비 작성 중</Status>
            </InfoSection>
          </ImgSection>
          <BtnWrap>
            <Btn onClick={this.handleClick}>스튜디오 바로가기</Btn>
          </BtnWrap>
        </CardWrapper>
      </Item>
    );
  }
}

const Item = styled.li`
  float: left;
  width: 300px;
  padding: 0 15px;
  position: relative;
  margin-bottom: 16px;
  list-style: none;
`;

const Menu = styled.button`
  position: absolute;
  width: 20px;
  height: 22.3px;
  right: 25px;
  top: 10px;
  z-index: 1000;
  padding: 0;
  background: transparent;
  background-image: url(${menu});
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  cursor: pointer;
`;

const CardWrapper = styled.div`
  width: 100%;
  text-align: left;
  position: relative;
  font-family: Roboto, "Noto Sans KR", sans-serif;
`;

const ImgSection = styled.div`
  position: relative;
  width: 100%;
  @media ${device.small} {
    height: 225px;
    overflow: hidden;
  }
  display: block;
  width: 100%;
  min-height: 225px;
  background: url(${props => props.titlephoto || "#0f171e 50% 50%"}) cover;
`;

const Default = styled.div`
  width: 100%;
  min-height: 225px;
  height: 100%;
  display: block;
  background: #babdc0;
`;

const Ment = styled.p`
  padding-top: 96px;
  color: #fff;
  font-size: 13px;
  text-align: center;
`;

const Reward = styled.span`
  background: #00cca3;
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  padding: 0 6px;
  height: 24px;
  font-size: 12px;
  line-height: 24px;
  color: #fff;
  z-index: 10;
  opacity: 0.96;
`;

const InfoSection = styled.div`
  overflow: hidden;
  height: 195px !important;
  position: relative;
  padding: 0 20px;
  border: 1px solid #dadce0;
  border-top: none;
  background: #fff;
`;

const BtnWrap = styled.div`
  width: 100%;
`;

const Btn = styled.button`
  display: block;
  width: 100%;
  height: 48px;
  padding: 0;
  text-align: center;
  font-size: 15px;
  color: #44484b;
  background: #fff;
  border: 1px solid #dadce0;
  border-top: none;
  letter-spacing: -0.02em;
  box-sizing: border-box !important;
  cursor: pointer;
  border-radius: 0;
`;

const Title = styled.h4`
  padding: 16px 0 0;
  margin: 0 0 8px;
  font-size: 17px;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 24px;
  max-height: 48px;
  color: #1d2129;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
  font-family: Roboto, "Noto Sans KR", sans-serif;
`;

const NameWrap = styled.h5`
  margin: 0;
  padding-bottom: 16px;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
  color: #90949c;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-family: Roboto, "Noto Sans KR", sans-serif;
`;

const Status = styled.p`
  font-size: 13px;
  line-height: 24px;
  color: #90949c;
  letter-spacing: -0.02em;
`;

export default ProjectItem;
