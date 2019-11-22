import React, { Component } from "react";
import styled from "styled-components";
import { RewardCondition } from "Datas/DesignReward";
import LoginSignupHeader from "Components/LoginSignupHeader";
import BigLoginButton from "Components/BigLoginButton";
import AddedReward from "./AddedReward";

class DesignReward extends Component {
  render() {
    const { openModal, data, deleteReward, handlePost } = this.props;
    return (
      <OuterContainer>
        <Container>
          <Category>펀딩준비 > 리워드 설계</Category>
          <LoginSignupHeader size="40px">리워드 설계</LoginSignupHeader>
          <CategoryInfo>
            서포터에게 제공할 리워드 내용을 입력하세요. 서포터가 쉽게 펀딩할 수
            있는 저렴한 리워드부터 서포터의 보다 빠른 펀딩을 유도할 수 있는
            얼리버드 리워드까지 다양한 리워드를 구성하세요.
          </CategoryInfo>
          <ConditionContainer>
            <Title>리워드 설계 조건</Title>
            <ListContainer>
              {RewardCondition.map(e => {
                return (
                  <List key={e.id}>
                    <ListName>{e.title}</ListName>
                    <ListInfo>{e.info}</ListInfo>
                  </List>
                );
              })}
            </ListContainer>
          </ConditionContainer>
          <BigLoginButton
            background="#90949c"
            radius="3px"
            onClick={openModal}
            width="150px"
          >
            + 추가하기
          </BigLoginButton>
          {data.map((e, index) => {
            return (
              <AddedReward
                key={e.id}
                id={e.id}
                index={index}
                name={e.name}
                price={e.price}
                option={e.option}
                scheduled_date={e.scheduled_date}
                stock={e.stock}
                introduction={e.introduction}
                openModal={openModal}
                deleteReward={deleteReward}
              />
            );
          })}
          <ButtonContainer>
            <BigLoginButton
              width="320px"
              height="48px"
              radius="3px"
              onClick={handlePost}
            >
              저장하기
            </BigLoginButton>
          </ButtonContainer>
        </Container>
      </OuterContainer>
    );
  }
}

export default DesignReward;

const OuterContainer = styled.div`
  width: 100%;
`;

const Container = styled.div`
  padding: 40px 66px;
`;
const Category = styled.div`
  font-size: 13px;
  margin-bottom: 40px;
`;

const CategoryInfo = styled.p`
  word-break: keep-all;
  font-size: 17px;
  line-height: 22px;
  width: 640px;
`;

const ConditionContainer = styled.div`
  padding: 26px 16px;
  border: 1px solid #efefef;
  margin-top: 30px;
  margin: 30px auto;
  width: 640px;
`;

const Title = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const ListContainer = styled.ul``;

const List = styled.li`
  line-height: 20px;
  color: #90949c;
  margin: 4px 0;
  font-size: 13px;
`;

const ListName = styled.span`
  font-weight: 700;
`;

const ListInfo = styled.div`
  display: inlnie-block;
  text-align: left;
`;

const ButtonContainer = styled.div`
  margin-top: 100px;
`;
