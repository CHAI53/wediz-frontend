import React, { Component } from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { color } from "Styles/Common.js";
import { API_TS } from "Datas/Config.js";
import LoginSignupHeader from "Components/LoginSignupHeader.js";
import InputWithButton from "Components/InputWithButton.js";
import InputWithImage from "Components/InputWithImage.js";
import BigLoginButton from "Components/BigLoginButton.js";
import WrongMessage from "Components/WrongMessage";
import TotalAgree from "./TotalAgree";
import Promotion from "./Promotion";
import user from "Images/user.png";
import lock from "Images/lock.png";

class EmailSignup extends Component {
  state = {
    email: "",
    user_name: "",
    password: "",
    re_password: "",
    phone_number: "",
    is_agree: false,
    promotion: false,
    email_state: false,
    is_verify: false,
    is_submit: true
  };

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.phone_number !== this.state.phone_number) {
      this.setState({
        is_submit: false
      });
    }
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

  goToLogin = () => {
    this.props.history.push("/login");
  };

  handlePost = () => {
    const {
      email,
      user_name,
      password,
      re_password,
      phone_number,
      is_agree,
      promotion
    } = this.state;
    if (
      email &&
      user_name &&
      password &&
      phone_number &&
      re_password &&
      password === re_password
    ) {
      fetch(`${API_TS}/account/signup`, {
        method: "post",
        body: JSON.stringify({
          email,
          user_name,
          password,
          phone_number,
          is_agree,
          promotion
        })
      })
        .then(res => res.json())
        .then(res => {
          console.log(res);
          if (res.MESSAGE === "SIGNUP_SUCCESS") {
            return this.goToLogin();
          }
        });
    }
  };

  render() {
    const {
      email,
      password,
      re_password,
      is_agree,
      promotion,
      is_verify,
      is_submit
    } = this.state;
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
            {email && (!email.includes("@") || !email.includes(".")) ? (
              <WrongMessage> 이메일 형식이 올바르지 않습니다.</WrongMessage>
            ) : (
              ""
            )}

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
            <InputWithImage
              placeholder="휴대폰 번호"
              imgUrl={lock}
              margin="15px 0"
              name="phone_number"
              onChange={this.handleChange}
              disabled={!is_verify}
              type="text"
            />
            <Promotion
              name="promotion"
              defaultChecked={promotion}
              onClick={this.handleClick}
            />
            <BigLoginButton
              radius="3px"
              onClick={this.handlePost}
              disabled={is_submit}
            >
              완료
            </BigLoginButton>
          </Container>
        </main>
      </>
    );
  }
}

export default withRouter(EmailSignup);

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
