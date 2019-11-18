import React from "react";
import styled from "styled-components";
import ButtonWithLogo from "Components/ButtonWithLogo";
import kakaoLogo from "Images/kakao-icon.png";
import googleLogo from "Images/google-icon.png";

const SocialLogin = () => {
  return (
    <Grid>
      <ButtonWithLogo
        background="#fff"
        border="1px solid rgba(0, 0, 0, 0.15);"
        color="#222222"
        imgUrl={kakaoLogo}
      >
        카카오
      </ButtonWithLogo>
      <ButtonWithLogo
        background="#fff"
        border="1px solid rgba(0, 0, 0, 0.15);"
        color="#222222"
        imgUrl={googleLogo}
      >
        구글
      </ButtonWithLogo>
    </Grid>
  );
};

export default SocialLogin;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
  button {
    width: 180px;
  }
`;
