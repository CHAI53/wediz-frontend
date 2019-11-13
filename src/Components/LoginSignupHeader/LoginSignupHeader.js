import React from "react";
import styled from "styled-components";

const Title = styled.h2`
  font-size: 30px;
  font-weight: 800;
`;

const Header = styled.header`
  margin-bottom: 20px;
`;

const LoginSignupHeader = ({ children }) => {
  return (
    <Header>
      <Title>{children}</Title>
    </Header>
  );
};

export default LoginSignupHeader;
