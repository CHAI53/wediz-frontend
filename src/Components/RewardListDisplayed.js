import React, { Component } from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

class RewardListDisplayed extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { name, price, stock, scheduled_date, option } = this.props.data;
    return (
      <RewardWrap>
        <SectionContainer>
          <FundingPrice>{price}원 펀딩</FundingPrice>
        </SectionContainer>
        <SectionContainer>
          <RewardTitle>{name}</RewardTitle>
          <RewardOption>{option}</RewardOption>
        </SectionContainer>
        <SectionContainer>
          <RewardOption>배송비</RewardOption>
          <RewardTitleEdit>0원</RewardTitleEdit>
        </SectionContainer>
        <SectionContainer>
          <RewardOption>리워드 발송 시작일</RewardOption>
          <RewardTitleEdit>{scheduled_date}</RewardTitleEdit>
        </SectionContainer>
        <SectionContainer>
          <RewardOption color="purple"> 제한수량 {stock}개</RewardOption>
        </SectionContainer>
      </RewardWrap>
    );
  }
}
export default RewardListDisplayed;

const RewardWrap = styled.div`
  width: 100%;
  margin: 10px;
  border: 1px solid ${color.blue};
  padding: 20px 20px;
`;
const RewardTitleEdit = styled.div`
  font-size: 13px;

  padding: 0 0 15px 0;
`;
const FundingPrice = styled.div`
  font-size: 17px;
  font-weight: bold;
  padding: 0 0 15px 0;
`;
const RewardTitle = styled.div`
  font-size: 15px;

  padding: 0 0 15px 0;
`;

const RewardOption = styled.div`
  font-size: 12px;
  padding: 0 0 15px 0;
  font-weight: lighter;
  color: ${props => props.color || "black"};
`;

const SectionContainer = styled.div`
  padding: 12px 0 7px 0;
`;
