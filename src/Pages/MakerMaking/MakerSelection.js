import React from "react";
import styled from "styled-components";
import { font } from "Styles/Common.js";

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

const SelectionWrapper = styled.div`
  margin-bottom: 40px;
  margin-top: 8px;
  height: 48px;
  line-height: 24px;
  display: flex;
  padding: 0;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.15);
`;

const MakerSelect = styled.select`
  align-itmes: center;
  justify-content: center;
  margin: 0;
  outline: none;
  border: 0;
  background: none;
  font-size: ${font.size};
  padding: 0 20px 0 10px;
  width: 868px;
  height: 100%;
  line-height: inherit;
  color: #b7b7b7;
  option {
    width: 868px;
    font-weight: normal;
    display: block;
    white-space: pre;
    min-height: 1.2em;
    padding: 0px 2px 1px;
    color: rgba(0, 0, 0, 0.87);
  }
`;

const MakerSelection = () => {
  return (
    <div>
      <MakerLabel>개인 · 사업자 구분</MakerLabel>
      <SelectionWrapper>
        <MakerSelect>
          <option value="" hidden>
            사업자 구분 선택
          </option>
          <option value="1">개인</option>
          <option value="2">개인사업자</option>
          <option value="3">법인사업자</option>
        </MakerSelect>
      </SelectionWrapper>
    </div>
  );
};

export default MakerSelection;
