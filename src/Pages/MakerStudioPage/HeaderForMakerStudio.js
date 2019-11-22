import React from "react";
import styled from "styled-components";
import MakerLogo from "Images/makerstudiologo.png";
import ImgCompany from "Images/imgcompany.png";

class HeaderForMakerStudio extends React.Component {
  render() {
    return (
      <Container>
        <HeaderLeft>
          <MSLogo></MSLogo>
        </HeaderLeft>
        <HeaderCenter>
          <CompanyLogo></CompanyLogo>
          <div>위디즈</div>
        </HeaderCenter>
        <HeaderRight>
          <ButtonContainer>
            <NavButtonPreview>미리보기</NavButtonPreview>
            <NavButton>나가기</NavButton>
          </ButtonContainer>
        </HeaderRight>
      </Container>
    );
  }
}

export default HeaderForMakerStudio;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 24px;
  border-bottom: 1px solid #e5e5e5;
  align-items: stretch;
  position: fixed;
  background-color: white;
  z-index: 2;
`;

const HeaderLeft = styled.div`
  display: flex;
  width: 33.33%;
  display: flex;
  align-items: center;
`;

const MSLogo = styled.div`
width: 164px;
height: 24px;
background-image: url('${MakerLogo}');
background-size:100%;
`;
const CompanyLogo = styled(MSLogo)`
width: 32px;
border-radius: 50%;
margin-right: 8px;
background-image: url('${ImgCompany}');
background-size:100%;
height: 32px;
`;
const HeaderCenter = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
`;
const HeaderRight = styled.div`
  width: 33.5%;
  display: flex;
  justify-content: flex-end;
`;

const ButtonContainer = styled.div`
  align-items: center;
  display: flex;
`;

const NavButton = styled.button`
  -webkit-appearance: none;
  border: none;
  font-size: 16px;
  color: rgba(0, 0, 0, 0.54);
  margin-left: 7px;
  type: button;
`;

const NavButtonPreview = styled(NavButton)`
  -webkit-appearance: none;
  border: 1px solid #00c4c4;
  border-radius: 30px;
  padding: 7px 18px;
  color: #00c4c4;
  font-size: 15px;
  margin-left: 0;
`;
