import React from "react";
import styled from "styled-components";
import { color, device } from "Styles/Common.js";

const RewardHeader = props => {
  return (
    <Container>
      <Atag href="/login"></Atag>
      <Span>스토리로 돌아가기</Span>
      <H2>
        {props.data.title}{" "}
        <CompanyImage
          style={{ backgroundImage: `url(${props.data.img_url})` }}
        />
        <CompanyName>{props.data.company_name}</CompanyName>
      </H2>
    </Container>
  );
};

export default RewardHeader;

const Container = styled.header`
  height: 67px;
  background-color: ${color.brown};
  display: block;
  @media ${device.middle} {
    height: 46px;
  }
`;

const H2 = styled.h2`
  color: white;
  width: 80%;
  text-align: center;
  font-size: 23px;
  line-height: 67px;
  margin: 0 auto;
  @media ${device.middle} {
    font-size: 14px;
    line-height: 46px;
  }
`;

const Atag = styled.a`
  position: absolute;
  display: inline;
  text-decoration: none;
  ::before {
    content: "<";
    margin-left: 10px;
    font-size: 30px;
    color: white;
    line-height: 67px;
    @media ${device.middle} {
      font-size: 17px;
      line-height: 46px;
    }
  }
`;

const Span = styled.span`
  position: absolute;
  color: white;
  left: 50px;
  line-height: 67px;
  @media ${device.middle} {
    display: none;
  }
`;

const CompanyName = styled.span`
  color: white;
  line-height: 67px;
  font-size: 15px;
  @media ${device.middle} {
    display: none;
  }
`;

const CompanyImage = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
  vertical-align: middle;
  @media ${device.middle} {
    display: none;
  }
`;
