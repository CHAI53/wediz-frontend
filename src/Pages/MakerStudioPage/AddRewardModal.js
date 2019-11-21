import React, { Component } from "react";
import styled from "styled-components";
import { AddRewardModalData } from "Datas/DesignReward";
import LoginSignupHeader from "Components/LoginSignupHeader";
import BigLoginButton from "Components/BigLoginButton";

class AddRewardModal extends Component {
  state = {
    price: "",
    name: "",
    introduction: "",
    option: "",
    stock: "",
    scheduled_date: ""
  };

  handleChange = e => {
    const name = e.target.name;
    this.setState({
      [name]: e.target.value
    });
  };
  render() {
    const { show, closeModal, handleReward } = this.props;
    const {
      price,
      name,
      introduction,
      option,
      stock,
      scheduled_date
    } = this.state;
    if (show) {
      return (
        <OuterContainer>
          <ModalContainer>
            <CloseButton onClick={closeModal}>X</CloseButton>
            <LoginSignupHeader>리워드 추가</LoginSignupHeader>
            <DescriptionList>
              {AddRewardModalData.map(e => {
                return (
                  <DescriptionContainer>
                    <Terms>{e.name}</Terms>
                    <Description
                      placeholder={e.placeholder}
                      name={e.stateName}
                      onChange={this.handleChange}
                    />
                  </DescriptionContainer>
                );
              })}
            </DescriptionList>
            <ButtonContainer>
              <BigLoginButton
                background="white"
                color="rgba(0,0,0,0.54)"
                border="1px solid rgba(0,0,0,0.54)"
                radius="3px"
                onClick={closeModal}
                width="200px"
              >
                취소
              </BigLoginButton>
              <BigLoginButton
                radius="3px"
                width="200px"
                onClick={() =>
                  handleReward(
                    price,
                    name,
                    introduction,
                    option,
                    stock,
                    scheduled_date
                  )
                }
              >
                등록
              </BigLoginButton>
            </ButtonContainer>
          </ModalContainer>
        </OuterContainer>
      );
    } else return null;
  }
}

export default AddRewardModal;

const OuterContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  float: right;
  width: 24px;
  height: 24px;
`;

const ModalContainer = styled.div`
  max-width: 660px;
  margin: 5% auto;
  background-color: white;
  padding: 80px 100px;
  position: relative;
`;

const DescriptionList = styled.dl``;

const DescriptionContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Terms = styled.dt`
  vertical-align: center;
  transform: translate(0, 20px);
  width: 100px;
`;

const Description = styled.input`
  width: 400px;
  height: 48px;
  padding: 0 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
