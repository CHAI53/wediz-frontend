import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { color, font } from "Styles/Common.js";
import wadizlogo from "Images/wadiz-logo.png";
import searcher from "Images/searcher.png";

const Header = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  padding: 0 80px;
  border-bottom: 1px solid #f0f2f5;
  height: 56px;
  font-size: ${font.size};
`;

const ContainerL = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 83px;
  height: 22px;
  display: inline-flex;
`;

const LogoImg = styled.span`
  width: 100%;
  cursor: pointer;
  background-image: url(${wadizlogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Icon = styled.ul`
  list-style: none;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 19px;
  font-weight: bold;
  margin-right: auto;
`;

const List = styled.li`
  padding: 0px 16px;
`;

const ListItem = styled.span`
  font-size: 15px;
  font-weight: normal;
`;

const ContainerR = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  font-size: ${font.size};
`;

const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${color.white};
  background-image: url(${searcher});
  &:focus {
    outline: none;
  }
`;

const LoginBtn = styled.button`
  border: none;
  padding: 0px 8px;
  cursor: pointer;
  font-size: inherit;
  background-color: ${color.white};
  &:focus {
    outline: none;
  }
`;

const OpenBtn = styled.button`
  font-size: inherit;
  padding: 7px 16px;
  margin: 0px 16px;
  cursor: pointer;
  color: ${color.blue};
  background-color: ${color.white};
  border-radius: 5px;
  border: 1px solid ${color.blue};
  &:hover {
    color: ${color.white};
    background-color: ${color.blue};
  }
`;

class NavBar extends Component {
  handleClick = e => {
    this.props.history.push(`${e.target.name}`);
  };
  render() {
    return (
      <Header>
        <ContainerL>
          <Logo onClick={this.handleClick} name="/">
            <LogoImg />
          </Logo>
          <Icon>
            <List>
              <ListItem>리워드</ListItem>
            </List>
            <List>
              <ListItem>더보기</ListItem>
            </List>
          </Icon>
        </ContainerL>
        <ContainerR>
          <SearchBtn></SearchBtn>
          <LoginBtn onClick={this.handleClick} name="/login">
            로그인
          </LoginBtn>
          <LoginBtn onClick={this.handleClick} name="/signup">
            회원가입
          </LoginBtn>
          <OpenBtn onClick={this.handleClick} name="/maker">
            리워드오픈 신청하기
          </OpenBtn>
        </ContainerR>
      </Header>
    );
  }
}

export default withRouter(NavBar);
