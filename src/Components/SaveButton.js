import React, { Component } from "react";
import { color } from "Styles/Common.js";
import styled, { css } from "styled-components";

const SaveButton = ({ children, ...props }) => {
  return (
    <>
      <FinalSaveButton {...props} placeholder={children} type="button">
        {children}
      </FinalSaveButton>
    </>
  );
};

export default SaveButton;

const FinalSaveButton = styled.button`
  -webkit-appearance: none;
  appearance: none;
  border: none;
  background-color: ${color.blue};
  color: white;
  border-radius: 5px;
  padding: 7px 18px;
  font-size: 15px;
  width: 50%;
  margin-top: 50px;
`;
