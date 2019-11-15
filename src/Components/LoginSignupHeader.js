import React from "react";
import styled from "styled-components";

const LoginSignupHeader = ({ children, ...props }) => {
  return (
    <Header marginBottom={props.marginBottom}>
      <Title size={props.size} weight={props.weight}>
        {children}
      </Title>
    </Header>
  );
};

export default LoginSignupHeader;

const Title = styled.h2`
  font-size: ${props => props.size || "30px"}
  font-weight: ${props => props.weight || "800"};
`;

const Header = styled.header`
  margin-bottom: ${props => props.marginBottom || "20px"};
`;
