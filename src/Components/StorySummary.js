import React, { Fragment, Component } from "react";
import styled, { css } from "styled-components";
import SectionForFormat from "./SectionForFormat.js";
import SectionDetail from "./SectionDetail.js";
import { color } from "Styles/Common.js";

class StorySummary extends Component {
  state = {
    value: "",
    stopped: "",
    detect: true
  };
  handleLength = e => {
    if (e.target.value.length >= 1 && e.target.value.length <= 100) {
      this.setState(
        {
          value: e.target.value,
          detect: true
        },
        () => this.props.pull(this.state.value)
      );
    } else if (this.state.value.length >= 0) {
      this.setState(
        {
          value: e.target.value,
          detect: false
        },
        () => this.props.pull(this.state.value)
      );
    }
  };
  render() {
    console.log(this.state.value);
    const input = this.state.value;
    // console.log("input===", input);
    const length = input.length;
    // console.log("length===", length);
    const remainLength = 100 - length;

    return (
      <>
        <SectionForFormat>프로젝트 요약</SectionForFormat>
        <SectionDetail>
          프로젝트 페이지 상단 및 지지서명 시 노출됩니다.
        </SectionDetail>
        <SummaryInput
          detect={this.state.detect}
          value={this.state.value}
          type="text"
          maxlength="100"
          placeholder="내용 입력"
          onChange={event => this.handleLength(event)}
        ></SummaryInput>
        {this.state.value && (
          <InputInfoSpan> {remainLength}자 남음</InputInfoSpan>
        )}
        {!this.state.detect && (
          <InputInfoSpan color="red"> 필수 입력 값입니다.</InputInfoSpan>
        )}
      </>
    );
  }
}

export default StorySummary;

const SummaryInput = styled.input`
  /* color: #c6c1c1; */
  opacity: 0.7;
  appearance: none;
  -webkit-appearance: none;
  width: 100%;
  /* min-height: 80px;
  max-height: 100px; */
  border: 1px solid ${color.blue};
  border-radius: 3px;
  padding: 0 14px;
  resize: vertical;
  line-height: 5em;
  margin-top: 30px;
  margin-bottom: 10px;
  padding-left: 5px;
  ${props =>
    !props.detect &&
    css`
border: 1px solid #ff6665
background-color: #fff9f9
`}
  ${props =>
    props.value &&
    css`
      opacity: 1;
    `}
`;
const InputInfoSpan = styled.span`
  font-size: 14px;
  color: ${props => props.color || "black"};
  padding-left: 8px;
`;
