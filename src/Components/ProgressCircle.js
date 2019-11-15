import React from "react";
import styled from "styled-components";
import { color, device } from "Styles/Common.js";

const ProgressCircle = props => {
  return (
    <Container>
      <CircleContainer>
        <Circle
          background={props.firstCircle}
          color={props.firstColor}
          border={props.firstBorder}
          padding="30px 0"
        >
          리워드
          <br />
          선택
        </Circle>
        <Circle
          margin="0 80px"
          background={props.secondCircle}
          border={props.secondBorder}
          color={props.secondColor}
        >
          결제 예약
        </Circle>
        <Circle>소문 내기</Circle>
      </CircleContainer>
      <Line />
    </Container>
  );
};

export default ProgressCircle;

const Container = styled.div`
  padding: 30px 0 42px;
`;

const CircleContainer = styled.ul`
  display: flex;
  margin: 0 auto;
  width: 430px;
`;

const Circle = styled.li`
  background-color: ${props => props.background || "white"};
  color: ${props => props.color || ""};
  border: ${props => props.border || "1px dashed #979797"};
  border-radius: 50%;
  width: 90px;
  height: 90px;
  vertical-align: middle;
  margin: ${props => props.margin || ""};
  text-align: center;
  padding: ${props => props.padding || "35px 0"};
  line-height: 20px;
  z-index: 1;
`;

const Line = styled.div`
  line-height: 1px;
  border-bottom: 1px dashed #979797;
  transform: translate(-45px, -45px);
  width: 340px;
  margin: 0 auto;
`;
