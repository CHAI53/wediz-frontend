import React, { Component } from "react";
import styled from "styled-components";
import CenterContainer from "Components/CenterContainer";
import BigLoginButton from "Components/BigLoginButton";
import DescriptionList from "./DescriptionList";

class PurchaseModal extends Component {
  state = {
    firstCheck: false,
    secondCheck: false,
    thirdCheck: false
  };

  handleCheck = e => {
    const name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
  };
  render() {
    const { firstCheck, secondCheck, thirdCheck } = this.state;
    const { show, data, onClick } = this.props;
    if (!show) {
      return (
        <Background>
          <ModalContainer>
            <Container>
              <Atag href="/login">스토리로 돌아가기</Atag>
              <Header>
                <H1>잠깐! </H1>
                <H2>결제하기가 아닌 펀딩하기인 이유를 확인하고, 펀딩하세요.</H2>
              </Header>
              <DescriptionList data={data} onClick={this.handleCheck} />
            </Container>
            <KeepFundingButton
              disabled={!(firstCheck && secondCheck && thirdCheck)}
              onClick={onClick}
            >
              계속해서 펀딩하기
            </KeepFundingButton>
          </ModalContainer>
        </Background>
      );
    } else {
      return null;
    }
  }
}
export default PurchaseModal;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0
  width: 100vw;
  height: 100%
  overflow-y: auto;
  background-color: rgba(128, 128, 128, 0.5);
  z-index: 100;
`;

const ModalContainer = styled(CenterContainer)`
  max-width: 560px;
  padding: 0;
  background-color: white;
  position: relative;
  margin: 5% auto;
  opacity: 1;
`;

const Container = styled.div`
  padding: 30px 32px 76px;
`;

const Atag = styled.a`
  display: inline-block;
  text-decoration: none;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
  font-size: 17px;
  ::before {
    content: "<";
    margin-right: 5px;
  }
`;

const Header = styled.header`
  margin-bottom: 25px;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  display: inline;
`;

const H2 = styled.h2`
  font-size: 28px;
  line-height: 32px;
  display: inline;
  word-break: keep-all;
`;

const KeepFundingButton = styled(BigLoginButton)`
  font-weight: 700;
  margin-top: 15px;
`;
