import React from "react";
import styled from "styled-components";
import { color, device } from "Styles/Common.js";
import information from "Images/customer-service.png";

const SubHeader = () => {
  return (
    <Container>
      <Title>리워드 선택</Title>
      <Info>
        펀딩해주시는 금액에 따라 감사의 의미로 리워드를 제공해 드립니다.
      </Info>
      <Atag href="signup">
        <Itag></Itag>
        펀딩하기는 쇼핑하기가 아닙니다! 자세히 알아보세요.
      </Atag>
    </Container>
  );
};

export default SubHeader;

const Container = styled.div`
  margin-bottom: 20px;
  position: relative;
  @media ${device.middle} {
    padding: 0 10px;
  }
`;

const Title = styled.span`
  font-weight: 700;
  font-size: 18px;
  @media ${device.middle} {
    display: block;
    margin-bottom: 30px;
  }
`;

const Info = styled.span`
  margin-left: 8px;
  @media ${device.middle} {
    display: block;
    margin-left: 0;
    margin-bottom: 10px;
  }
`;

const Atag = styled.a`
  color: ${color.blue};
  font-size: 12px;
  cursor: pointer;
  position: absolute;
  right: 5px;
  @media ${device.middle} {
    left: 5px;
  }
`;

const Itag = styled.i`
  ::before {
    background-size: 100%;
    vertical-align: middle;
    margin-right: 3px;
    content: "";
    display: inline-block;
    background-image: url(${information});
    width: 15px;
    height: 15px;
  }
`;
