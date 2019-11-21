import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const TotalFunding = props => {
  return (
    <Container>
      {props.data.title}에 <Span>{props.total}</Span> 원을 펀딩합니다.
    </Container>
  );
};

export default TotalFunding;

const Container = styled.div`
  text-align: center;
  font-weight: 600;
  margin-top: 50px;
`;

const Span = styled.span`
  color: ${color.blue};
  border-bottom: 1px solid ${color.blue}
  display: inline-block;
`;
