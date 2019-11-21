import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const SquareChkBox = ({ display, ...props }) => {
  return (
    <Label>
      <Input type="checkbox" {...props} />
      <Span display={display}></Span>
    </Label>
  );
};

export default SquareChkBox;

const Label = styled.label`
  position: relative;
`;

const Input = styled.input`
  display: inline-block;
  width: 20px;
  height: 20px;
  -webkit-appearance: none;
  border: 1px solid #efefef;
  outline: none;
  transition: 0.4s
  cursor: pointer;
  border-radius: ${props => props.radius || ""};
  :hover {
    border: 1px solid ${color.blue}
  }
  ::before {
    display: inline-block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transition: all 0.4s;
    border-radius: ${props => props.radius || ""};
    }
    :checked::before {
      border-right: 1px solid #fff;
      border-bottom: 1px solid #fff;
      background-color: ${color.blue};
      transition: all 0.4s;
    }
  }
`;

const Span = styled.span`
  display: ${props => props.display || "inline-block"};
  ::before {
    content: "";
    position: absolute;
    width: 5px;
    height: 10px;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    left: 10px;
    top: 8px;
    transform: translate(-50%, -50%) rotateZ(40deg);
    transition: all 0.4s;
  }
`;
