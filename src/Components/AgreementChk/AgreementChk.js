import React, { Component } from "react";
import styled from "styled-components";
import { font } from "Styles/Common.js";
import CircleChkBox from "../CircleChkBox/CircleChkBox";

const ChkLabel = styled.label`
  @media screen and (min-width: 769px) {
    display: inline-flex;
    padding: 12px 0;
    vertical-align: middle;
  }
`;

const ChkComment = styled.div`
  position: relative;
  padding-left: 10px;
  color: #60656a;
  font-size: ${font.size};
`;

class AgreementChk extends Component {
  constructor(props) {
    super(props);
    this.state = { is_agreed: false };
  }

  handleClick = e => {
    const name = e.target.name;
    this.setState({
      [name]: !this.state[name]
    });
  };

  render() {
    return (
      <>
        <ChkLabel>
          <CircleChkBox onClick={this.handleClick} name="is_agreed" />
          <ChkComment>(필수) 개인 정보 수집 동의</ChkComment>
        </ChkLabel>
      </>
    );
  }
}

export default AgreementChk;
