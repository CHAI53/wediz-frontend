import React, { Component } from "react";
import styled from "styled-components";
import InputBox from "Components/InputBox";
import { API_TS } from "Datas/Config";
import LoginSignupHeader from "Components/LoginSignupHeader";
import LoginAction from "./LoginAction";
import BigLoginButton from "Components/BigLoginButton/BigLoginButton";
import TextWithLine from "./TextWithLine";
import ButtonWithLogo from "Components/ButtonWithLogo/ButtonWithLogo";
import SocialLogin from "./SocialLogin";
import facebookLogo from "Images/facebook-icon.png";
import GoToSignup from "./GoToSignup";

const Wrong = styled.span`
  font-size: 13px;
  color: #f25555;
  display: inline-block;
  margin-left: 2px;
  margin-bottom: 7px;
`;

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 80px 16px 96px;
`;

class Login extends Component {
  state = {
    email: "",
    password: "",
    inputState: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.type]: e.target.value
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    fetch(`${API_TS}/account/signin`, {
      method: "post",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  render() {
    const { email, inputState, password } = this.state;
    const { handleChange, handleLogin } = this;
    console.log(email, password);
    return (
      <>
        <main>
          <Container>
            <LoginSignupHeader>로그인</LoginSignupHeader>
            <InputBox
              onChange={handleChange}
              placeholder="이메일 아이디"
              type="email"
              inputState={inputState}
            />
            {email && (!email.includes("@") || !email.includes(".")) ? (
              <Wrong> 이메일 형식이 올바르지 않습니다.</Wrong>
            ) : (
              ""
            )}
            <InputBox
              onChange={handleChange}
              placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
              type="password"
            />
            <LoginAction />
            <BigLoginButton radius="3px" onClick={handleLogin}>
              로그인
            </BigLoginButton>
            <TextWithLine />
            <ButtonWithLogo background="#304d8a" imgUrl={facebookLogo}>
              페이스북으로 로그인
            </ButtonWithLogo>
            <SocialLogin />
            <GoToSignup />
          </Container>
        </main>
      </>
    );
  }
}

export default Login;
