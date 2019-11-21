import React from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

const AddedReward = props => {
  const { price, stock, scheduled_date, name, introduction, index } = props;
  return (
    <Container>
      <TitleContainer>
        <Price>{price}원</Price>
        <Stock>제한 수량{stock}개</Stock>
      </TitleContainer>
      <Block size="15px" margin="10px 0 20px 0">
        {name}
      </Block>
      <Block margin="0 0 20px 0">{introduction}</Block>
      <SmallContainer>
        <Block>배송비</Block>
        <Block>해당 없음</Block>
      </SmallContainer>
      <SmallContainer>
        <Block>리워드 발송 시작일</Block>
        <Block>{scheduled_date}</Block>
      </SmallContainer>
      <ButtonContainer>
        <Button onClick={props.openModal}>편집</Button>
        <Button onClick={() => props.deleteReward(index)}>삭제</Button>
      </ButtonContainer>
    </Container>
  );
};

export default AddedReward;

const Container = styled.div`
  padding: 24px 36px;
  width: 343px;
  border: 1px solid #efefef;
  margin: 50px 0;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #efefef;
`;

const Price = styled.span`
  font-weight: 700;
  line-height: 17px;
`;

const Stock = styled.span`
  display: inline-block;
  background-color: ${color.light_blue};
  color: ${color.blue};
  font-size: 11px;
  line-height: 17px;
  padding: 2px;
  font-weight: 700;
`;

const Block = styled.p`
  margin: ${props => props.margin || ""};
  font-size: ${props => props.size || "13px"};
`;

const SmallContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  border-radius: 5px;
  font-size: 13px;
  color: rgba(0, 0, 0, 0.54);
`;
