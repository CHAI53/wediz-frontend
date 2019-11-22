import React from "react";
import styled from "styled-components";
import LoginSignupHeader from "Components/LoginSignupHeader";
import SquareChkBox from "Components/SquareChkBox";
import { color, device } from "Styles/Common.js";

const UserInfo = props => {
  const { name, email, phone_number } = props.data;
  return (
    <Container>
      <LoginSignupHeader size="24px">펀딩 서포터</LoginSignupHeader>
      <DescriptionContainer>
        <DescriptionList>
          <Terms>이름</Terms>
          <Description>{name}</Description>
        </DescriptionList>
        <DescriptionList>
          <Terms>이메일</Terms>
          <Description>{email}</Description>
        </DescriptionList>
        <DescriptionList borderBottom="1px solid #979797">
          <Terms>휴대폰 번호</Terms>
          <Description>{phone_number}</Description>
        </DescriptionList>
        <CheckContainer>
          <CustomChkBox
            checked={props.necessaryCheck}
            onChange={props.handleAgree}
            name="necessaryCheck"
          />
          <Content>
            (필수) 펀딩 진행에 대한 새소식 및 결제 관련 안내를 받습니다.
          </Content>
        </CheckContainer>
      </DescriptionContainer>
    </Container>
  );
};

export default UserInfo;

const Container = styled.div`
  margin-right: 20px;
  @media ${device.middle} {
    margin-right: 0;
    margin-bottom: 40px;
  }
`;

const DescriptionContainer = styled.div`
  padding: 15px 12px 24px;
  background-color: ${color.dark_grey};
  width: 315px;
  @media ${device.middle} {
    width: 100%;
  }
`;

const DescriptionList = styled.dl`
  margin-bottom: 15px;
  border-bottom: ${props => props.borderBottom || ""};
`;

const Terms = styled.dt`
  font-size: 14px;
  margin-bottom: 8px;
`;

const Description = styled.dd`
  font-size: 14px;
  line-height: 36px;
  color: #9b9b9b;
`;

const CheckContainer = styled.label`
  display: flex;
`;

const CustomChkBox = styled(SquareChkBox)`
  background-color: white;
`;

const Content = styled.div`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
`;
