import React, { Component } from "react";
import styled from "styled-components";
import FundingMockUpData from "Datas/CategoryForMakerStudio.js";

class FundingStory extends Component {
  state = {
    fundingCategory: FundingMockUpData.list1
  };
  render() {
    const { title, optionTwo } = this.state.fundingCategory;
    return (
      <StoryContianer container>
        <PathNav path nav>
          <TitleFunding> {title} ></TitleFunding>
          <span>{optionTwo}</span>
        </PathNav>
        <div header>
          <HeaderTitleForFunding>{optionTwo}</HeaderTitleForFunding>
          <HeaderDetailForFunding>
            메이커님의 프로젝트를 소개해보세요. 스토리에는 메이커님의 진심과
            목소리가 잘 녹여질 수 있도록 명확하고, 솔직하게, 친근한 어투로
            작성하세요.
          </HeaderDetailForFunding>
        </div>
        <form>
          <SectionForForm>소개 영상·사진 등록</SectionForForm>
          <SectionDetail>
            프로젝트 페이지 상단에 노출될 영상 또는 사진을 올려주세요.{" "}
          </SectionDetail>
        </form>
        <div button></div>
      </StoryContianer>
    );
  }
}

export default FundingStory;

const StoryContianer = styled.div`
  padding: 0 70px;
  /* width: 2434px; */
`;
const PathNav = styled.div`
  margin: 40px 0 40px 0;
  font-size: 13px;
`;
const TitleFunding = styled.span`
  color: #00a2a2;
`;

const HeaderTitleForFunding = styled.h1`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
`;
const HeaderDetailForFunding = styled.div`
  font-size: 18px;
  margin-bottom: 40px;
`;

const SectionForForm = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  &:after {
    padding-top: 7px;
    width: 5px;
    display: inline-block;
    margin-left: 4px;
    color: #f66;
    content: "*";
  }
`;
const SectionDetail = styled.div`
  font-size: 13px;
  color: #90949c;
`;
