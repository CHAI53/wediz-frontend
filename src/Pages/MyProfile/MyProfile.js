import React, { Component } from "react";
import styled from "styled-components";
import { API_TS } from "Datas/Config.js";
import { withRouter } from "react-router-dom";
import axios from "axios";
import CenterContainer from "Components/CenterContainer.js";
import FileUpload from "Components/FileUpload.js";
import LoginSignupHeader from "Components/LoginSignupHeader.js";
import BigLoginButton from "Components/BigLoginButton.js";
import WrongMessage from "Components/WrongMessage.js";
import SmallTitle from "./SmallTitle";
import UserInfo from "./UserInfo";
import InterestList from "./InterestList";
import user from "Images/user.png";

class MyProfile extends Component {
  state = {
    education_kids: false,
    fashion_beauty_goods: false,
    home_design_item: false,
    concert_culture: false,
    sport_mobility: false,
    publishing: false,
    animal: false,
    tech_home_appliance: false,
    company: "",
    company_position: "",
    university: "",
    major: "",
    main_address: "",
    sub_address: "",
    introduction: "",
    selectedFile: null,
    image_url: user,
    wrong_display: "none"
  };

  fileSelectHandler = e => {
    this.setState({
      selectedFile: e.target.files[0]
    });
  };

  fileUploadHandler = () => {
    const { selectedFile } = this.state;
    const formData = new FormData();
    if (selectedFile) {
      formData.append("photo", selectedFile, selectedFile.name);
      console.log(formData);
      axios
        .post(`${API_TS}/account/modifyprofilephoto`, formData, {
          headers: {
            Authorization:
              "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2lzX21ha2VyIjpmYWxzZSwiZXhwIjoxNTc0NDUzMTM1fQ.h2Em9RYbqz4MyxkNG6KlqNbQzew6xldzHr_TXbXcl3w"
          }
        })
        .then(res => {
          console.log(res);
          this.setState({
            image_url: res.data.photo_url
          });
        });
    } else {
      this.setState({
        wrong_display: "inline"
      });
    }
  };

  goToMyPage = () => {
    this.props.history.push("/");
  };

  handleCategory = e => {
    const name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handlePost = () => {
    const {
      education_kids,
      fashion_beauty_goods,
      home_design_item,
      concert_culture,
      sport_mobility,
      publishing,
      animal,
      tech_home_appliance,
      company,
      company_position,
      university,
      major,
      main_address,
      sub_address,
      introduction
    } = this.state;
    fetch(`${API_TS}/account/modifyprofile`, {
      method: "post",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VyX2lzX21ha2VyIjpmYWxzZSwiZXhwIjoxNTc0NDUzMTM1fQ.h2Em9RYbqz4MyxkNG6KlqNbQzew6xldzHr_TXbXcl3w"
      },
      body: JSON.stringify({
        education_kids,
        fashion_beauty_goods,
        home_design_item,
        concert_culture,
        sport_mobility,
        publishing,
        animal,
        tech_home_appliance,
        company,
        company_position,
        university,
        major,
        main_address,
        sub_address,
        introduction
      })
    })
      .then(res => res.json())
      .then(res => {
        if (res.MESSAGE === "SUCCESS") {
          this.goToMyPage();
        }
      });
  };

  render() {
    const { image_url, wrong_display } = this.state;
    return (
      <>
        <main>
          <CenterContainer>
            <LoginSignupHeader size="20px" weight="300" marginBottom="30px">
              프로필 정보 설정
            </LoginSignupHeader>
            <SmallTitle margin="5px 0">프로필 사진</SmallTitle>
            <FileUpload
              onChange={this.fileSelectHandler}
              onClick={this.fileUploadHandler}
              imgUrl={image_url}
              width="100px"
              height="100px"
              id="profile"
            />
            <WrongMessage display={wrong_display}>
              프로필 사진을 등록해주세요
            </WrongMessage>
            <SmallTitle margin="5px 0">관심사</SmallTitle>
            <SmallTitle size="12px">
              최소 5개 이상 관심사를 선택해주세요.
            </SmallTitle>
            <InterestList onClick={this.handleCategory} />
            <UserInfo onChange={this.handleChange} />
            <ButtonContainer>
              <SmallButton background="grey" radius="5px">
                취소
              </SmallButton>
              <SmallButton
                radius="5px"
                marginLeft="5px"
                onClick={this.handlePost}
              >
                확인
              </SmallButton>
            </ButtonContainer>
          </CenterContainer>
        </main>
      </>
    );
  }
}

export default withRouter(MyProfile);

const SmallButton = styled(BigLoginButton)`
  font-size: 14px;
  margin-left: ${props => props.marginLeft || ""};
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;
