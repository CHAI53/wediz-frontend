import React from "react";
import styled from "styled-components";
import LoginSignupHeader from "Components/LoginSignupHeader";
import InputBox from "Components/InputBox";
import { color, device } from "Styles/Common.js";

const Address = props => {
  return (
    <Container>
      <LoginSignupHeader size="24px">리워드 배송지</LoginSignupHeader>
      <SubContainer>
        <Title weight="500">이름</Title>
        <InputBox
          height="36px"
          borderColor={color.brown}
          radius="3px"
          margin="0 0 10px 0"
          size="15px"
          name="name"
          onChange={props.handleChange}
        />
        <Title weight="500">휴대폰 번호</Title>
        <InputBox
          height="36px"
          borderColor={color.brown}
          radius="3px"
          margin="0 0 10px 0"
          size="15px"
          name="phoneNumber"
          onChange={props.handleChange}
        />
        <Title weight="500">주소</Title>
        <InputBox
          height="36px"
          borderColor={color.brown}
          radius="3px"
          margin="0 0 10px 0"
          size="15px"
          name="address"
          onChange={props.handleChange}
        />
      </SubContainer>
      <SubContainer margin="20px 0">
        <Title>배송 시 요청사항(선택)</Title>
        <InputBox
          placeholder="ex) 부재시 경비실에 보관해주세요."
          height="36px"
          borderColor={color.brown}
          radius="3px"
          margin="0 0 10px 0"
          size="15px"
          name="request"
          onChange={props.handleChange}
        />
        <Info>해당 요청사항은 배송에 관련된 내용만 적어주세요.</Info>
      </SubContainer>
    </Container>
  );
};

export default Address;

const Container = styled.div`
  width: 100%;
`;

const SubContainer = styled.div`
  padding: 0 20px 10px;
  border-bottom: 1px solid ${color.dark_grey}
  margin: ${props => props.margin || ""};
  @media ${device.middle} {
    padding: 0;
  }
`;

const Title = styled.p`
  margin: ${props => props.margin || "0 0 10px 0"};
  display: block;
  font-size: 14px;
  font-weight: ${props => props.weight || ""};
`;

const Info = styled.p`
  font-size: 12px;
  color: ${color.brown};
`;
