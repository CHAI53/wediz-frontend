import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const TextAreaBox = ({ children, ...props }) => {
  return <TextArea {...props}>{children}</TextArea>;
};

export default TextAreaBox;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  margin: 5px 0;
  font-size: 13px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #efefef;
  transition: 0.4s;
  color: rgba(0, 0, 0, 0.84);
  resize: none;
  padding: 10px 15px;
  :hover {
    border: 1px solid black;
    transition: border 0.4s;
  }
  :focus {
    border: 1px solid ${color.blue};
  }
  :disabled {
    background-color: #edebeb
    border: 1px solid rgba(0, 0, 0, 0.16);
    transition: 0.4s;
  }
`;
