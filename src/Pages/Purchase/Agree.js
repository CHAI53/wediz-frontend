import React, { Component } from "react";
import styled from "styled-components";
import LoginSignupHeader from "Components/LoginSignupHeader";
import SquareChkBox from "Components/SquareChkBox";

class Agree extends Component {
  render() {
    const {
      handleAgree,
      firstAgree,
      secondAgree,
      handleTotalAgree
    } = this.props;
    return (
      <>
        <LoginSignupHeader size="24px">약관 동의</LoginSignupHeader>
        <Container>
          <Label borderBottom="1px solid #efefef">
            <SquareChkBox
              radius="50%"
              checked={firstAgree && secondAgree}
              onChange={() => handleTotalAgree(firstAgree && secondAgree)}
            />
            <Title>전체 동의하기</Title>
          </Label>
          <Label>
            <SquareChkBox
              radius="50%"
              checked={firstAgree}
              name="firstAgree"
              onChange={handleAgree}
            />
            <Title>제 3자에 대한 개인정보 제공 동의</Title>
          </Label>
          <Label>
            <SquareChkBox
              radius="50%"
              checked={secondAgree}
              name="secondAgree"
              onChange={handleAgree}
            />
            <Title>책임 규정에 대한 동의</Title>
          </Label>
        </Container>
      </>
    );
  }
}

export default Agree;

const Container = styled.div`
  border: 1px solid #efefef;
`;

const Label = styled.label`
  display: block;
  padding: 14px;
  width: 100%;
  border-bottom: ${props => props.borderBottom || ""};
`;

const Title = styled.span`
  margin-left: 10px;
`;
