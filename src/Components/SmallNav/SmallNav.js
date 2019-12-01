import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { color, font, device } from "Styles/Common.js";
import wadizlogo from "Images/wadiz-logo.png";
import searcher from "Images/searcher.png";
import bell from "Images/bell.png";

class SmallNav extends Component {
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
          <Icon></Icon>
        </ContainerL>
        <ContainerR>
          <SearchBtn />
          <BellBtn />
        </ContainerR>
      </Header>
    );
  }
}

const Header = styled.header`
  @media ${device.smallMin} {
    position: relative;
    top: 0;
    z-index: 9998;
    background-color: #fff;
    width: 100%;
    height: 48px;
    text-align: center;
  }
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

const BellBtn = styled.button`
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: ${color.white};
  background-image: url(${bell});
  &:focus {
    outline: none;
  }
`;

export default withRouter(SmallNav);
