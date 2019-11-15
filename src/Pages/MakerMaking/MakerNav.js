import React from "react";
import { font } from "Styles/Common.js";
import styled from "styled-components";
import wadizlogo from "Images/wadiz-logo.png";

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: ${font.white};
  height: 40px;
`;

const Logo = styled.a`
  width: 85px;
  height: 25px;
  cursor: pointer;
  text-decoration: none;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${wadizlogo});
`;

const MakerNav = () => {
  return (
    <NavBar>
      <Logo />
    </NavBar>
  );
};

export default MakerNav;
