import React, { Component } from "react";
import styled from "styled-components";
import LoginSignupHeader from "Components/LoginSignupHeader";
import TotalAgree from "./TotalAgree";

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 80px 16px 96px;
`;

class EmailSignup extends Component {
  render() {
    return (
      <>
        <main>
          <Container>
            <LoginSignupHeader>회원가입</LoginSignupHeader>
            <TotalAgree />
          </Container>
        </main>
      </>
    );
  }
}

export default EmailSignup;
