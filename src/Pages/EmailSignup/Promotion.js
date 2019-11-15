import React from "react";
import styled from "styled-components";
import SquareChkBox from "Components/SquareChkBox";

const Container = styled.div`
  margin-top: 30px;
  display: flex;
  margin-bottom: 30px;
`;

const InputInfo = styled.span`
  line-height: 20px;
  font-size: 17px;
  margin-left: 5px;
`;

const Span = styled.span`
  line-height: 20px;
  font-size: 15px;
  margin-left: 5px;
  font-weight: 300;
`;

const Promotion = props => {
  return (
    <Container>
      <SquareChkBox {...props} />
      <InputInfo>프로모션 코드</InputInfo>
      <Span>(선택사항)</Span>
    </Container>
  );
};

export default Promotion;
