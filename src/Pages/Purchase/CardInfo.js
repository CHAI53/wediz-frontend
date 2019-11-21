import React from "react";
import styled from "styled-components";
import LoginSignupHeader from "Components/LoginSignupHeader";
import InputBox from "Components/InputBox";
import { color, device } from "Styles/Common.js";

const CardInfo = props => {
  return (
    <Container>
      <LoginSignupHeader size="24px" weight="400" marginBottom="40px">
        결제 정보
      </LoginSignupHeader>
      <LoginSignupHeader size="22px" weight="600">
        결제 정보 입력
      </LoginSignupHeader>
      <Title>신용(체크)카드번호</Title>
      <InputContainer>
        <InputBox
          height="36px"
          margin="0 6px 0 0"
          type="number"
          name="cardFirst"
          onChange={props.handleChange}
        />
        <InputBox
          height="36px"
          margin="0 6px 0 0"
          type="number"
          name="cardSecond"
          onChange={props.handleChange}
        />
        <InputBox
          height="36px"
          margin="0 6px 0 0"
          type="number"
          name="cardThird"
          onChange={props.handleChange}
        />
        <InputBox
          height="36px"
          type="number"
          name="cardFourth"
          onChange={props.handleChange}
        />
      </InputContainer>
      <InputContainer>
        <SubContainer margin="0 6px 0 0">
          <Title>유효기간</Title>
          <InputBox
            height="36px"
            placeholder="MM/YY"
            type="number"
            name="verifyPeriod"
            onChange={props.handleChange}
          />
        </SubContainer>
        <SubContainer>
          <Title>카드 비밀번호</Title>
          <InputBox
            height="36px"
            type="password"
            placeholder="앞 2자리"
            name="cardPassword"
            onChange={props.handleChange}
          />
        </SubContainer>
      </InputContainer>
      <Title margin="10px 0 0 0">생년월일 (주민번호 앞 6자리)</Title>
      <Title color="rgba(0,0,0,0.3)" size="13px">
        무기명 법인카드는 사업자등록번호 10자리를 입력하세요.
      </Title>
      <InputBox
        height="36px"
        type="number"
        name="identification"
        onChange={props.handleChange}
      />
    </Container>
  );
};

export default CardInfo;

const Container = styled.div`
  width: 400px;
  @media ${device.middle} {
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: ${props => props.size || "15px"};
  color: ${props => props.color || ""};
  margin: ${props => props.margin || ""};
  line-height: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 5px;
`;

const SubContainer = styled.div`
  margin: ${props => props.margin || ""};
  width: 50%;
`;
