import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const MakerInputBox = ({ ...props }) => {
  return <Input {...props}></Input>;
};

const Input = styled.input`
  width: ${props => props.width || "868px"};
  display: ${props => props.display || "block"};
  height: 48px;
  line-height: 1.2em;
  font-size: 17px;
  font-weight: 300;
  transition-duration: 0.2s, 0s;
  outline: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
  background: #fff;
  padding: 0 0.94118em;
  vertical-align: middle;
  color: rgba(0, 0, 0, 0.84);
  background-color: ${props => props.background || ""};
  :focus {
    border: 1px solid ${color.blue};
  }
`;

export default MakerInputBox;
