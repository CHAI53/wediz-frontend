import React from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";

const SponsorInput = props => {
  return (
    <Container>
      <Title>후원금 더하기(선택)</Title>
      <Wrapper>
        <Question>
          후원금을 더하여 펀딩할 수 있습니다. 추가 후원금을 입력하시겠습니까?
        </Question>
        <Input
          onChange={props.onChange}
          name="sponsor"
          value={props.value}
          type="number"
        />
        <Span>원을 추가로 후원합니다.</Span>
      </Wrapper>
    </Container>
  );
};

export default SponsorInput;

const Container = styled.div`
  display: flex;
  @media ${device.middle} {
    display: block;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 16px;
  @media ${device.middle} {
    margin-bottom: 20px;
    display: inline-block;
    margin-left: 10px;
  }
`;

const Wrapper = styled.div`
  margin-left: 80px;
  @media ${device.middle} {
    margin-left: 10px;
  }
`;

const Question = styled.span`
  display: block;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 202px;
  height: 48px;
  padding: 0 10px;
  text-align: right;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Span = styled.span`
  margin-left: 5px;
`;
