import React from "react";
import styled from "styled-components";
import MakerInputBox from "Components/MakerInputBox";

const MakerInput = ({ children, ...props }) => {
  return (
    <MakerName>
      <MakerLabel>{children}</MakerLabel>
      <MakerInputBox
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        disabled={props.disabled}
        type={props.type}
        value={props.value}
        background={props.background}
      />
    </MakerName>
  );
};

const MakerName = styled.div`
  margin-top: 24px;
  margin-bottom: 40px;
`;

const MakerLabel = styled.label`
  display: block;
  margin-bottom: 8px;
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

export default MakerInput;
