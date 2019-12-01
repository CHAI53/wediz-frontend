import React, { Component } from "react";
import NavBarSection from "./NavBarSection";
import styled from "styled-components";
import { color } from "Styles/Common.js";
import wadizlogo from "Images/wadiz-logo.png";

class StickyNav extends Component {
  state = {
    navMenu: [
      {
        id: 0,
        menu: "스토리",
        count: ""
      },
      {
        id: 1,
        menu: "펀딩 안내",
        count: ""
      },
      {
        id: 2,
        menu: "새소식",
        count: ""
      },
      {
        id: 3,
        menu: "커뮤니티",
        count: 2
      },
      {
        id: 4,
        menu: "서포터",
        count: 349
      }
    ]
  };
  render() {
    const { navMenu } = this.state;
    const navBar = navMenu.map((el, index) => (
      <NavBarSection key={index} data={el} />
    ));
    return (
      <HorizonNavBar>
        <Logo onClick={this.handleClick} name="/">
          <LogoImg />
        </Logo>
        {navBar}
      </HorizonNavBar>
    );
  }
}
export default StickyNav;

const HorizonNavBar = styled.nav`
  height: 73px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ebebeb;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 1;
`;

const Logo = styled.div`
  width: 83px;
  height: 22px;
  display: inline-flex;
  margin-bottom: 9px;
  margin-right: 20px;
`;

const LogoImg = styled.span`
  width: 100%;
  cursor: pointer;
  background-image: url(${wadizlogo});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
