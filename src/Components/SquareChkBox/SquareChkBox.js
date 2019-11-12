import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const Label = styled.label`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-color: #fff;
  position: relative;
  border: 1px solid #efefef;
  cursor: pointer;
  :hover {
    border: 1px solid ${color.blue};
    transition: border 0.4s;
  }
  ::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 10px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    left: 50%;
    top: 35%;
    transform: translate(-50%, -50%) rotateZ(40deg);
    transition: all 0.4s;
    opacity: 0;
  }
`;

const Input = styled.input`
  position: absolute;
  opacity: 0;
  visibility: hidden;
`;

const ChkboxWrap = styled.div`
  position: relative;

  input:checked + label {
    background-color: ${color.blue};
    transition: background-color 0.4s;
  }
  input:checked + label::before {
    opacity: 1;
  }
`;

const SquareChkBox = ({ ...props }) => {
  return (
    <ChkboxWrap>
      <Input type="checkbox" {...props}></Input>
      <Label {...props}></Label>
    </ChkboxWrap>
  );
};

export default SquareChkBox;
