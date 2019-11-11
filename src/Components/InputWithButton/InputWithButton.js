import React from "react";
import styled from "styled-components";
import InputBox from "Components/InputBox";
import BigLoginButton from "Components/BigLoginButton";

const RightButton = styled(BigLoginButton)`
  position: absolute;
  right: 5px;
  font-size: 15px;
  width: 90px;
  height: 38px;
  border-radius: 3px;
  top: 10px;
  :disabled {
    background-color: rgba(0, 196, 196, 0.5);
    color: rgba(255, 255, 255, 0.54);
    transition: 0.2s;
  }
`;

const InputContainer = styled.div`
  position: relative;
`;

const InputWithButton = ({ children, ...props }) => {
  return (
    <InputContainer>
      <InputBox
        placeholder={props.placeholder}
        onChange={props.onChange}
        name={props.name}
        disabled={props.disabled}
        type={props.type}
      />
      <RightButton disabled={props.disabled} onClick={props.onClick}>
        {children}
      </RightButton>
    </InputContainer>
  );
};

export default InputWithButton;
