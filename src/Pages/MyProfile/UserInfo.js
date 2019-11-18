import React from "react";
import styled from "styled-components";
import InputBox from "Components/InputBox";
import TextAreaBox from "Components/TextAreaBox";
import SmallTitle from "./SmallTitle";

const UserInfo = props => {
  return (
    <>
      <SmallTitle>회사 / 직책</SmallTitle>
      <FlexContainer>
        <SmallInputBox
          placeholder="회사"
          name="company"
          onChange={props.onChange}
        />
        <SmallInputBox
          placeholder="직책"
          marginLeft="5px"
          name="company_position"
          onChange={props.onChange}
        />
      </FlexContainer>
      <SmallTitle>학교 / 전공</SmallTitle>
      <FlexContainer>
        <SmallInputBox
          placeholder="학교"
          name="university"
          onChange={props.onChange}
        />
        <SmallInputBox
          placeholder="전공"
          marginLeft="5px"
          name="major"
          onChange={props.onChange}
        />
      </FlexContainer>
      <SmallTitle>주활동지</SmallTitle>
      <FlexContainer>
        <SmallInputBox
          placeholder="시 / 도"
          name="main_address"
          onChange={props.onChange}
        />
        <SmallInputBox
          placeholder="시군구"
          marginLeft="5px"
          name="sub_address"
          onChange={props.onChange}
        />
      </FlexContainer>
      <SmallTitle>간단한 한 마디로 나를 소개해주세요</SmallTitle>
      <TextAreaBox onChange={props.onChange} name="introduction" />
    </>
  );
};

export default UserInfo;

const SmallInputBox = styled(InputBox)`
  padding: 10px;
  font-size: 14px;
  margin-left: ${props => props.marginLeft || ""};
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
