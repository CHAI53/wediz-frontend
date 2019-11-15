import React, { Component } from "react";
import styled from "styled-components";
import { API_TS } from "Datas/Config.js";
import { color } from "Styles/Common.js";
import LoginSignupHeader from "Components/LoginSignupHeader";
import InputWithButton from "Components/InputWithButton";
import InputWithImage from "Components/InputWithImage";
import BigLoginButton from "Components/BigLoginButton";
import TotalAgree from "./TotalAgree";
import Promotion from "./Promotion";
import user from "Images/user.png";
import lock from "Images/lock.png";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 80px 16px 96px;
  position: relative;
`;
const InputInfo = styled.div`
  line-height: 18px;
  font-size: 13px;
  color: ${props => props.color || "rgba(0, 0, 0, 0.8)"};
`;

class EmailSignup extends Component {
  state = {
    email: "",
    user_name: "",
    password: "",
    re_password: "",
    is_agree: false,
    promotion: false,
    email_state: false,
    is_verify: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
  };

  handleVerification = () => {
    this.setState({
      is_verify: true
    });
  };

  handlePost = () => {
    const { email, user_name, password, is_agree, promotion } = this.state;
    fetch(`${API_TS}/account/signup`, {
      method: "post",
      body: JSON.stringify({
        email,
        user_name,
        password,
        is_agree,
        promotion
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  render() {
    const {
      password,
      re_password,
      is_agree,
      promotion,
      is_verify
    } = this.state;
    console.log(is_agree, promotion);
    return (
      <>
        <main>
          <Container>
            <LoginSignupHeader>회원가입</LoginSignupHeader>
            <TotalAgree
              name="is_agree"
              onClick={this.handleClick}
              defaultChecked={is_agree}
            />
            <InputWithButton
              placeholder="이메일 입력"
              onChange={this.handleChange}
              name="email"
              disabled={!is_agree}
              onClick={this.handleVerification}
              type="text"
            >
              인증하기
            </InputWithButton>
            <InputInfo>위 이메일로 인증번호가 발송됩니다.</InputInfo>
            <InputWithImage
              placeholder="이름"
              imgUrl={user}
              margin="15px 0"
              name="user_name"
              onChange={this.handleChange}
              disabled={!is_verify}
              type="text"
            />
            <InputWithImage
              placeholder="비밀번호 입력"
              imgUrl={lock}
              name="password"
              onChange={this.handleChange}
              opacity="0.3"
              disabled={!is_verify}
              type="password"
            />
            <InputWithImage
              placeholder="비밀번호 확인"
              imgUrl={lock}
              name="re_password"
              onChange={this.handleChange}
              opacity="0.3"
              disabled={!is_verify}
              type="password"
            />
            <InputInfo>
              영문, 숫자, 특수문자 (!@#$%^&*+=-)를 조합한 8자 이상
            </InputInfo>
            {password && password !== re_password ? (
              <InputInfo color={color.red}>
                동일한 비밀번호를 입력해주세요.
              </InputInfo>
            ) : (
              ""
            )}

            <Promotion
              name="promotion"
              defaultChecked={promotion}
              onClick={this.handleClick}
            />
            <BigLoginButton radius="3px" onClick={this.handlePost}>
              완료
            </BigLoginButton>
          </Container>
        </main>
      </>
    );
  }
}

export default EmailSignup;
