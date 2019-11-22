import React, { Component } from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";
import data from "./MainData.js";
import RewardItem from "./RewardItem";

class RewardView extends Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }

  render() {
    const { data } = this.state;
    const list = data.map(el => (
      <RewardItem
        main_image={el.main_image}
        title={el.title}
        category_id={el.category_id}
        maker_id={el.maker_id}
        percent={el.percent}
        goal_money={el.goal_money}
        deadline={el.deadline}
      />
    ));
    return (
      <RewardWrapper>
        <RewardHeader>
          <Title>전체보기</Title>
        </RewardHeader>
        <RewardCardList>
          <GridWrapper>{list}</GridWrapper>
        </RewardCardList>
      </RewardWrapper>
    );
  }
}

const GridWrapper = styled.div`
  @media ${device.smallMin} {
    display: grid;
    grid-template-columns: repeat(3, calc(33.33333% - 30px));
    grid-row-gap: 40px;
    grid-column-gap: 30px;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  transition: opacity 0.25s;
`;
const RewardCardList = styled.div`
  display: block;
  position: relative;
`;

const Title = styled.h3`
  display: block;
  position: absolute;
  bottom: 12px;
  left: 0;
  line-height: 32px;
  font-size: 24px;
  font-weight: 700;
`;

const RewardHeader = styled.div`
  @media ${device.smallMin} {
    display: block;
    position: relative;
    margin: 0 auto;
    border-top: 0;
    padding-right: 0;
    padding-bottom: 8px;
    padding-left: 0;
    width: 100%;
    text-align: right;
  }
  vertical-align: baseline;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
`;

const RewardWrapper = styled.div`
  @media ${device.smallMin} {
    padding: 0 16px;
  }
  position: relative;
  margin: 0 40px auto;
  max-width: 1032px;
  box-sizing: content-box;
`;

export default RewardView;
