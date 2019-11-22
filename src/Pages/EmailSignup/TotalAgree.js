import React from "react";
import styled from "styled-components";
import SquareChkBox from "Components/SquareChkBox.js";

const TotalAgree = ({ ...props }) => {
  return (
    <Container>
      <SquareChkBox {...props} />
      <AgreeContainer>
        <Total>전체동의</Total>
        <Agree>와디즈 서비스 이용약관, 쿠폰포인트 오픈알림 뉴스레터 수신</Agree>
        <Agree>(선택)</Agree>
      </AgreeContainer>
      <Button>></Button>
    </Container>
  );
};

export default TotalAgree;

const Container = styled.div`
  display: flex;
`;

const AgreeContainer = styled.div`
  margin-left: 15px;
`;

const Agree = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: 400;
  word-break: keep-all;
  margin-bottom: 5px;
`;
const Total = styled(Agree)`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
`;

const Button = styled.button`
  border: none;
  color: rgba(0, 0, 0, 0.54);
`;
