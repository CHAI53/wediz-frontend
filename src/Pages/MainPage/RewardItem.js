import React, { Component } from "react";
import styled from "styled-components";
import { device, color } from "Styles/Common.js";

class RewardItem extends Component {
  render() {
    return (
      <div>
        <RewardCard>
          <RewardImg main_image={this.props.main_image} />
        </RewardCard>
        <RewardDetail>
          <DetailTop>
            <TopTitle>{this.props.title}</TopTitle>
          </DetailTop>
          <div>
            <DetailCategory> {this.props.category_id}</DetailCategory>
            <DetailMaker>{this.props.maker_id}</DetailMaker>
          </div>
          <Bar />
          <DescWrap>
            <Percent>{this.props.percent}</Percent>
            <Amount>{this.props.goal_money}</Amount>
            <RemainWrap>
              <Remain>{this.props.deadline}</Remain>
            </RemainWrap>
          </DescWrap>
        </RewardDetail>
      </div>
    );
  }
}

const Remain = styled.span`
  @media screen and (min-width: 360px) {
    display: inline-block;
  }
  margin-left: auto;
`;

const RemainWrap = styled.div`
  @media ${device.smallMin} {
    font-size: 14px;
    font-weight: 500;
  }
  display: inline-block;
  color: #90949c;
  margin-left: auto;
`;

const Amount = styled.div`
  @media ${device.smallMin} {
    font-size: 14px;
    font-weight: 500;
  }
  display: inline-block;
  line-height: 24px;
  color: #90949c;
`;

const Percent = styled.div`
  @media ${device.smallMin} {
    font-size: 17px;
  }
  color: #00b2b2;
  font-size: 15px;
  font-weight: 700;
  display: inline-block;
  line-height: 24px;
  margin-right: 10px;
`;

const DescWrap = styled.div`
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  @media ${device.smallMin} {
    height: 3px;
    width: 100%;
  }
  position: relative;
  background-color: ${color.blue};
  width: 100%;
  height: 2px;
  overflow: hidden;
`;

const DetailMaker = styled.span`
  display: inline-block;
  position: relative;
  outline: none;
  background-color: #fff;
  padding-left: 11px;
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const DetailCategory = styled.span`
  @media ${device.smallMin} {
    font-size: 13px;
  }
  display: inline-block;
  height: 16px;
  vertical-align: top;
  line-height: 16px;
  color: #90949c;
  font-size: 12px;
  font-weight: 500;
`;

const TopTitle = styled.p`
  @media ${device.smallMin} {
    margin-bottom: 4px;
    height: auto;
    max-height: none;
    line-height: 24px;
    font-size: 17px;
  }
  height: auto;
  display: block;
  display: -webkit-box;
  margin: 0 0 4px;
  height: 40px;
  overflow: hidden;
  line-height: 20px;
  letter-spacing: -0.3px;
  white-space: normal;
  color: rgba(0, 0, 0, 0.84);
  font-size: 15px;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-weight: bold;
`;

const DetailTop = styled.div`
  @media screen and (min-width: 360px) {
    height: 80px;
  }
  height: 70px;
`;

const RewardDetail = styled.div`
  @media ${device.smallMin} {
    margin-right: 0;
  }
  position: relative;
  display: block;
  z-index: 2;
  margin-right: 16px;
  line-height: 16px;
  letter-spacing: 0;
  color: #90949c;
  font-size: 12px;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const RewardImg = styled.div`
  @media ${device.smallMin} {
    display: inline-block;
    border-radius: 3px;
    position: absolute;
    top: 0;
    left: 0;
  }
  display: inline-block;
  position: relative;
  clear: both;
  min-height: 100px;
  white-space: normal;
  background-image: url(${props => props.main_image});
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const RewardCard = styled.div`
  @media ${device.smallMin} {
    float: none;
    margin-right: 0;
    margin-bottom: 10px;
    padding-top: 56.25%;
    width: 100%;
    height: auto;
  }
  display: block;
  position: relative;
  clear: both;
  white-space: normal;
`;

export default RewardItem;
