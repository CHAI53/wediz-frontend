import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import FundingStoryIntroForm from "./FundingStoryIntroForm";
import FundingMockUpData from "Datas/CategoryForMakerStudio.js";
import StorySummary from "./StorySummary.js";
import MyEditor from "./MyEditor/MyEditor.js";
import ProjectStory from "./ProjectStory.js";

class FundingStory extends Component {
  constructor() {
    super();
    this.state = {
      fundingCategory: FundingMockUpData.list1,
      summaryInput: "",
      is_agreed: true
    };
  }

  handlePullSummary = inputValue => {
    this.setState({
      summaryInput: inputValue
    });
  };

  handleSendSummary = () => {
    console.log("handleSave is working");
    // axios로 post하면 끝
    const htmlCode = window.localStorage.getItem("content");
    const token = window.localStorage.getItem("VALID_TOKEN");
    console.log(htmlCode);
    fetch("http://10.58.6.160:8000/fund/story", {
      method: "post",
      headers: {
        Authorization: window.localStorage.getItem("VALID_TOKEN")
      },
      body: JSON.stringify({
        summary: this.state.summaryInput,
        is_agreed: this.state.is_agreed,
        context: htmlCode
      })
    })
      // axios
      //   .post("http://10.58.6.160:8000/fund/story", {
      //     headers: {
      //       Authorization: token
      //     },
      //     params: {
      //       summary: this.state.summaryInput,
      //       is_agreed: this.state.is_agreed,
      //       context: htmlCode
      //     }
      //   })
      .then(res => {
        res.message === "success" && console.log("res from server===", res);
      });
  };

  render() {
    const { title, optionTwo } = this.state.fundingCategory;
    const { summaryInput } = this.state;
    console.log(this.state.summaryInput);
    return (
      <WholeContainer>
        <StoryContianer container>
          <PathNav path nav>
            <TitleFunding> {title} ></TitleFunding>
            <span>{optionTwo}</span>
          </PathNav>
          <div header>
            <HeaderTitleForFunding>{optionTwo}</HeaderTitleForFunding>
            <HeaderDetailForFunding>
              메이커님의 프로젝트를 소개해보세요.<br></br> 스토리에는 메이커님의
              진심과 목소리가 잘 녹여질 수 있도록 <br></br> 명확하고, 솔직하게,
              친근한 어투로 작성하세요.
            </HeaderDetailForFunding>
            <FundingStoryIntroForm />
          </div>
          <StorySummary pull={this.handlePullSummary} />
          <ProjectStory sendSummary={this.handleSendSummary} />
        </StoryContianer>
      </WholeContainer>
    );
  }
}

export default FundingStory;

const WholeContainer = styled.div`
  width: 100%;
  height: auto;
`;

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
  margin-right: 5px;
`;

const HeaderTitleForFunding = styled.h1`
  color: black;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 20px;
  font-size: 36px;
`;
const HeaderDetailForFunding = styled.div`
  font-size: 18px;
`;
