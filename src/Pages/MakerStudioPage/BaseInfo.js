import React, { Component } from "react";
import styled from "styled-components";
import { API_TS } from "Datas/Config.js";
import LoginSignupHeader from "Components/LoginSignupHeader";
import SectionForFormat from "Components/SectionForFormat";
import InputBox from "Components/InputBox";
import SquareChkBox from "Components/SquareChkBox";
import BigLoginButton from "Components/BigLoginButton";
import SelectBox from "Components/SelectBox";

class BaseInfo extends Component {
  state = {
    title: "",
    goal_money: "",
    category: 0,
    dead_line: "",
    is_adult_agreed: false
  };
  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };

  handleCheck = () => {
    const { is_adult_agreed } = this.state;
    this.setState({
      is_adult_agreed: !is_adult_agreed
    });
  };

  handleCategory = e => {
    console.log("되나?", e.target.id);

    // this.setState({
    //   category: id
    // });
  };

  handlePost = () => {
    const { title, goal_money, dead_line, is_adult_agreed } = this.state;
    fetch(`${API_TS}/fund/maininfo`, {
      method: "post",
      headers: {
        Authorization: window.localStorage.getItem("VALID_TOKEN")
      },
      body: JSON.stringify({
        title,
        goal_money,
        dead_line,
        is_adult_agreed
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };
  render() {
    const {
      title,
      goal_money,
      dead_line,
      is_adult_agreed,
      category
    } = this.state;
    console.log(category);
    return (
      <Container>
        <SubContainer>
          <Category>펀딩준비 > 기본 정보</Category>
          <LoginSignupHeader size="40px">기본 정보</LoginSignupHeader>
          <CategoryInfo>
            프로젝트를 대표할 주요 기본 정보를 입력하세요.
          </CategoryInfo>
          <SectionForFormat>프로젝트 제목</SectionForFormat>
          <InputBox name="title" onChange={this.handleChange} />
          <SectionForFormat>목표 금액</SectionForFormat>
          <InputBox name="goal_money" onChange={this.handleChange} />
          <SectionForFormat>카테고리</SectionForFormat>
          <SelectBox
            checked={is_adult_agreed}
            handleCategory={this.handleCategory}
          />
          <SectionForFormat>프로젝트 종료일</SectionForFormat>
          <InputBox name="dead_line" onChange={this.handleChange} />
          <SectionForFormat>성인 인증</SectionForFormat>
          <SmallContainer>
            <SquareChkBox
              onChange={this.handleCheck}
              checked={is_adult_agreed}
            />
            19세 이상 펀딩 가능한 리워드입니다.
          </SmallContainer>
          <BigLoginButton width="300px" radius="3px" onClick={this.handlePost}>
            저장하기
          </BigLoginButton>
        </SubContainer>
      </Container>
    );
  }
}

export default BaseInfo;

const Container = styled.div`
  width: 100%;
`;

const SubContainer = styled.div`
  padding: 40px 66px;
`;

const Category = styled.div`
  font-size: 13px;
  margin-bottom: 40px;
`;

const CategoryInfo = styled.p`
  word-break: keep-all;
  font-size: 17px;
  line-height: 22px;
  width: 640px;
`;

const SmallContainer = styled.div`
  margin-bottom: 50px;
`;
