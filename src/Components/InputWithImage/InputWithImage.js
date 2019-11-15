import React from "react";
import styled from "styled-components";
import InputBox from "Components/InputBox";

const InputContainer = styled.div`
  position: relative;
  margin: ${props => props.margin || "5px 0"};
`;

const Icon = styled.span`
  display: inline-block;
  background: url(${props => props.imgUrl || ""}) no-repeat scroll center center /
    100% auto rgba(0, 0, 0, 0);
  width: 24px;
  height: 24px;
  position: absolute;
  right: 15px;
  top: 15px;
  opacity: ${props => props.opacity || 1};
`;

const InputWithImage = props => {
  return (
    <InputContainer margin={props.margin}>
      <InputBox
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        type={props.type}
        disabled={props.disabled}
      />
      <Icon imgUrl={props.imgUrl} />
    </InputContainer>
  );
};

export default InputWithImage;
