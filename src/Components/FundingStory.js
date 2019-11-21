import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import FundingStoryIntroForm from "./FundingStoryIntroForm";
import FundingMockUpData from "Datas/CategoryForMakerStudio.js";
import StorySummary from "./StorySummary.js";
import MyEditor from "./MyEditor/MyEditor.js";
import ProjectStory from "./ProjectStory.js";
// import axios from "axios"

class FundingStory extends Component {
  constructor() {
    super();
    this.state = {
      fundingCategory: FundingMockUpData.list1,
      summaryInput: ""
    };
  }

  handlePullSummary = inputValue => {
    this.setState({
      summaryInput: inputValue
    });
  };

  handleSendSummary = summary => {
    console.log("handleSave is working", summary);
    // axios로 post하면 끝
    // const htmlCode = window.locaStorage.getItem("content")
    // Axios.post('10.58.2.201:8004/user/signin',{
    //   params: {
    //     email:this.props.idvalue,
    //     password: this.props.pwvalue
    //   }
    // })
    //   .then(res => {
    //     res.message === "success" &&
    //console.log("res from server===", res)
    // });
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
          <ProjectStory
            sendSummary={() => this.handleSendSummary(summaryInput)}
          />
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
