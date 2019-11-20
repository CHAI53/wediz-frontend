import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const WrongMessage = ({ children, display }) => {
  return <Wrong display={display}>{children}</Wrong>;
};

export default WrongMessage;

const Wrong = styled.span`
  font-size: 13px;
  color: ${color.red}
  display: inline-block;
  margin-left: 2px;
  margin-bottom: 7px;
  display: ${props => props.display || "inline"}
`;
