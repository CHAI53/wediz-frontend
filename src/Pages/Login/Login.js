import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { API_TS, API_SH } from "Datas/Config";
import InputBox from "Components/InputBox.js";
import LoginSignupHeader from "Components/LoginSignupHeader.js";
import WrongMessage from "Components/WrongMessage";
import BigLoginButton from "Components/BigLoginButton.js";
import LoginAction from "./LoginAction";
import ButtonWithLogo from "Components/ButtonWithLogo.js";
import SocialLogin from "./SocialLogin";
import TextWithLine from "./TextWithLine";
import GoToSignup from "./GoToSignup";
import facebookLogo from "Images/facebook-icon.png";

class Login extends Component {
  state = {
    email: "",
    password: "",
    inputState: "",
    is_login: "none"
  };

  goToMain = () => {
    this.props.history.push("/");
  };

  handleChange = e => {
    this.setState({
      [e.target.type]: e.target.value
    });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    fetch(`${API_SH}/account/signin`, {
      method: "post",
      body: JSON.stringify({
        email,
        password
      })
    })
      .then(res => res.json())
      .then(res => {
        window.localStorage.setItem("VALID_TOKEN", res.VALID_TOKEN);
        if (res.VALID_TOKEN) {
          this.goToMain();
        } else {
          this.setState({
            is_login: "inline"
          });
        }
      });
  };

  render() {
    const { email, inputState, is_login } = this.state;
    const { handleChange, handleLogin } = this;
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
              <WrongMessage> 이메일 형식이 올바르지 않습니다.</WrongMessage>
            ) : (
              ""
            )}
            <InputBox
              onChange={handleChange}
              placeholder="비밀번호(영문, 숫자, 특수문자 포함 8자 이상)"
              type="password"
            />
            <WrongMessage display={is_login}>
              와디즈에 등록되지 않은 아이디거나, 아이디 또는 비밀번호가
              회원정보와 일치하지 않습니다.
            </WrongMessage>
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

export default withRouter(Login);

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 80px 16px 96px;
`;
