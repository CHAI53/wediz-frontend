import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const SelectList = props => {
  return (
    <Container>
      {props.data.map(e => {
        return (
          <List key={e.id}>
            <Title>{e.name}</Title>
            <PriceContainer>
              <Quantity>수량 : {e.quantity}개</Quantity>
              <Price>{e.price * e.quantity}원</Price>
            </PriceContainer>
          </List>
        );
      })}
    </Container>
  );
};

export default SelectList;

const Container = styled.ul`
  border-top: 1px solid black;
`;

const List = styled.li`
  border-bottom: 1px solid #efefef;
  padding: 15px;
`;

const Title = styled.p`
  color: ${color.blue};
  margin-bottom: 10px;
  font-size: 14px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Quantity = styled.span`
  font-size: 14px;
  margin-right: 20px;
  font-weight: 700;
`;

const Price = styled.span`
  font-size: 14px;
  font-weight: 700;
`;
