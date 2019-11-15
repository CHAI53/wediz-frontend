import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const MakerName = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;

const MakerLabel = styled.label`
  display: block;
  천ㅅmargin-bottom: 8px;
  line-height: 24px;
  color: rgba(0, 0, 0, 0.84);
  font-size: 17px;
  &::after {
    display: inline-block;
    margin-left: 4px;
    color: #f66;
    content: "*";
  }
`;

const MakerInputBox = styled.input`
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
  :focus {
    border: 1px solid ${color.blue};
  }
`;

const MakerInput = ({ children, ...props }) => {
  return (
    <MakerName>
      <MakerLabel>{children}</MakerLabel>
      <MakerInputBox {...props} />
    </MakerName>
  );
};

export default MakerInput;
