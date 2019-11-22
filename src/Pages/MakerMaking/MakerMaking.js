import React, { Component } from "react";
import styled from "styled-components";
import { API_TS } from "Datas/Config";
import MakerNav from "./MakerNav";
import MakerDesc from "./MakerDesc";
import MakerSelection from "./MakerSelection";
import MakerInput from "./MakerInput";
import MakerHelper from "./MakerHelper";
import BigLoginButton from "Components/BigLoginButton/BigLoginButton";
import AgreementChk from "Components/AgreementChk";

const MakerWrapper = styled.div`
  margin-right: calc(50% - 500px);
  margin-left: calc(50% - 500px);
  padding: 40px 66px;
  height: 100%;
`;

const MakerForm = styled.form`
  position: relative;
`;

const MarginMaker = styled.div`
  margin-top: 80px;
`;

class MakerMaking extends Component {
  state = {
    name: "",
    kind: "",
    user_name: "",
    user_email: "",
    phone_number: "",
    is_agreed: false,
    disabled: false
  };

  componentDidMount() {
    const key = `eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxfQ.BQaYsgMzTzB3FGNyGVccFd5LQqgXmM6zXpLVAA5V8QA`;
    fetch(`${API_TS}/fund/maker`, {
      method: "GET",
      headers: { Authorization: key }
    })
      .then(res => res.json())
      .then(data =>
        this.setState({
          user_name: data.user_name,
          user_email: data.user_email
        })
      )
      .catch(error => this.setState({ error, isLoading: false }));
  }

  // getFromUsers = () => {
  //   fetch(`${API_TS}/fund/maker`, {
  //     method: "GET",
  //     headers: { Authorization: key }
  //   })
  //     .then(res => res.json())
  //     .then(data =>
  //       this.setState({
  //         user_name: data.user_name,
  //         user_email: data.user_email
  //       })
  //     )
  //     .catch(error => this.setState({ error, isLoading: false }));
  // };

  handleSubmit = e => {
    e.preventDefault();

    const {
      name,
      kind,
      user_name,
      user_email,
      phone_number,
      is_agreed
    } = this.state;

    fetch(`${API_TS}/fund/maker`, {
      method: "POST",
      body: JSON.stringify({
        name,
        kind,
        user_name,
        user_email,
        phone_number,
        is_agreed
      })
    })
      .then(response => {
        console.log(response, "response");
        return response.json();
      })
      .then(response => {
        console.log(response);
        if (response.SUCCESS === "200") {
          console.log("success");
        }
        this.props.history.push("/");
      });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDisabled = e => {
    this.setState({
      disabled: true
    });
  };

  handleAgree = e => {
    this.setState({
      is_agreed: true
    });
  };

  render() {
    return (
      <MakerWrapper>
        <MakerNav />
        <MakerDesc />
        <MakerForm onSubmit={this.handleSubmit}>
          <MakerInput name="name" onChange={this.handleChange} type="text">
            메이커(기업)명
          </MakerInput>
          <MakerSelection name="kind" onChange={this.handleChange} />
          <MakerInput name="user_name" onChange={this.handleDisabled}>
            관리자 명
          </MakerInput>
          <MakerInput name="user_email" onChange={this.handleDisabled}>
            관리자 이메일
          </MakerInput>
          <MakerHelper>
            관리자명과 이메일 주소는 로그인 아이디와 연동되어 있으므로 변경을
            원할 경우 회원 정보 설정에서 변경하세요.
          </MakerHelper>
          <MakerInput width="782px" display="inline-block" name="phone_number">
            관리자 휴대폰 번호
          </MakerInput>
          <AgreementChk name="is_agreed" />
          <MarginMaker>
            <BigLoginButton width="320px" radius="3px" type="submit">
              계속 진행하기
            </BigLoginButton>
          </MarginMaker>
        </MakerForm>
      </MakerWrapper>
    );
  }
}

export default MakerMaking;
