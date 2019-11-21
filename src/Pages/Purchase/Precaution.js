import React from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";

const Precaution = () => {
  return (
    <Container>
      <Title>결제 예약시 유의사항</Title>
      <ListContainer>
        <List>
          결제실행일에 결제자 귀책사유(한도초과, 이용정지 등)로 인하여 결제가
          실패할 수 있으니, 결제수단이 유효한지 한번 확인하세요.
        </List>
        <List>
          1차 결제 실패 시 실패일로부터 3 영업일 동안 재 결제를 실행합니다.
        </List>
        <List>
          결제 예약 이후, 결제할 카드를 변경하려면 마이페이지 > 나의 리워드의
          결제정보에서 카드정보를 변경해주세요.
        </List>
      </ListContainer>
    </Container>
  );
};

export default Precaution;

const Container = styled.div`
  width: 250px;
  position: absolute;
  bottom: 0;
  right: 0;
  padding-left: 10px;
  @media ${device.middle} {
    position: relative;
    margin-top: 10px;
    width: 100%;
  }
`;

const Title = styled.p`
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 5px;
  @media ${device.middle} {
    font-size: 17px;
    font-weight: 700;
  }
`;

const ListContainer = styled.ul`
  padding-left: 10px;
`;

const List = styled.li`
  position: relative;
  list-style: dot;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.53);
  line-height: 20px;
  word-break: keep-all;
  ::before {
    content: "-";
    position: absolute;
    left: -10px;
  }
`;
