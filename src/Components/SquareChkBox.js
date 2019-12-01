import React from "react";
import styled, { css } from "styled-components";
import { color } from "Styles/Common.js";

const SquareChkBox = ({
  chungRyulColor,
  children,
  textColor,
  checkedColor,
  ...props
}) => {
  return (
    <Label checkedColor={checkedColor}>
      <Input type="checkbox" {...props} radius={props.radius} />
      <Span
        textColor={textColor}
        chungRyulColor={props.chungRyulColor}
        radius={props.radius}
      >
        {children}
      </Span>
    </Label>
  );
};

export default SquareChkBox;

const Label = styled.label`
  position: relative;
  top: 0;
  input:checked + span {
    color: ${props => props.checkedColor || ""};
    transition: color 0.2s;
  }
`;

const Input = styled.input`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  border: 1px solid #efefef;
  outline: none;
  transition: 0.4s;
  margin-right: 5px;
  cursor: pointer;
  border-radius: ${props => props.radius || ""};
  :hover {
    border: 1px solid ${color.blue};
  }
  ::before {
    display: inline-block;
    content: "";
    position: relative;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    border-radius: ${props => props.radius || ""};
    transition: all 0.4s;
  }
  :checked::before {
    position: absolute;
    left: 0;
    top: 0;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: ${color.blue};
    transition: all 0.4s;
  }
`;

const Span = styled.span`
  color: ${props => props.textColor || ""};
  transition: color 0.2s;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 10px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    ${props =>
      props.chungRyulColor &&
      css`
        border: none;
      `}
    left: 10px;
    top: 8px;
    transform: translate(-50%, -50%) rotateZ(40deg);
    transition: all 0.4s;
  }
`;
