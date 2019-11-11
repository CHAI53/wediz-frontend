import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const InputBox = ({ ...props }) => {
  return (
    <>
      <Input {...props}></Input>
    </>
  );
};

const Input = styled.input`
  width: 100%;
  margin: 5px 0;
  height: 48px;
  font-size: 17px;
  font-weight: 300;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #efefef;
  :hover {
    border: 1px solid black;
    transition: border 0.4s;
  }
  :focus {
    border: 1px solid ${color.blue};
  }
`;

export default InputBox;
