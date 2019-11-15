import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const BigLoginButton = ({ children, ...props }) => {
  return (
    <Button {...props}>
      <span>{children}</span>
    </Button>
  );
};

export default BigLoginButton;

const Button = styled.button`
  width: ${props => props.width || "100%"};
  height: ${props => props.height || "48px"};
  border: ${props => props.border || "none"};
  font-size: ${props => props.size || "17px"};
  color: ${props => props.color || "#fff"};
  background-color: ${props => props.background || color.blue};
  border-radius: ${props => props.radius || 0};
  position: ${props => props.position || "relative"};
  :disabled {
    background-color: rgba(0, 196, 196, 0.5);
    color: rgba(255, 255, 255, 0.54);
    transition: 0.2s;
  }
`;
