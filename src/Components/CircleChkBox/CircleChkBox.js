import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const Label = styled.label`
  display: flex;
  position: relative;
  align-items: center;
`;

const Input = styled.input`
  display: inline-block;
  align-content: center;
  width: 20px;
  height: 20px;
  outline: none;
  transition: 0.4s;
  -webkit-appearance: none;
  border: 1px solid #efefef;
  border-radius: 50%;
  cursor: pointer;
  ::before {
    display: inline-block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transition: all 0.4s;
  }
  :checked::before {
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: ${color.blue};
    transition: all 0.4s;
  }
`;

const Span = styled.span`
  content: "";
  position: absolute;
  width: 5px;
  height: 10px;
  border-right: 1px solid ${color.gray};
  border-bottom: 1px solid ${color.gray};
  transform: translate(-50%, -50%) rotateZ(40deg);
  left: 10px;
  top: 10px;
  ::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 10px;
    border-right: 1px solid ${color.white};
    border-bottom: 1px solid ${color.white};
    left: 2px;
    top: 3px;
    transform: translate(-50%, -50%) rotateZ(5deg);
    transition: all 0.4s;
  }
`;

const CircleChkBox = ({ ...props }) => {
  return (
    <Label>
      <Input type="checkbox" {...props} />
      <Span></Span>
    </Label>
  );
};

export default CircleChkBox;
