import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const GoToSignup = () => {
  return (
    <GoSignup>
      <Span>아직 와디즈 계정이 없나요?</Span>
      <ATag href="/signup">회원가입</ATag>
    </GoSignup>
  );
};

export default GoToSignup;

const GoSignup = styled.div`
  margin-top: 25px;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  font-size: 13px;
`;

const Span = styled.span`
  display: inline-block;
`;

const ATag = styled.a`
  margin-left: 15px;
  color: ${color.blue};
`;
