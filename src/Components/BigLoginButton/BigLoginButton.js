import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const Button = styled.button`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "48px"};
  border: ${props => props.border || "none"};
  font-size: ${props => props.size || "17px"};
  color: ${props => props.color || "#fff"};
  background-color: ${props => props.background || color.blue};
  border-radius: ${props => props.radius || 0};
  position: ${props => props.position || "relative"};
`;

const BigLoginButton = ({ children, ...props }) => {
  return (
    <Button {...props}>
      <span>{children}</span>
    </Button>
  );
};

export default BigLoginButton;
