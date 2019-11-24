import React, { Component } from "react";
import styled from "styled-components";
import { API_TS, API_SH } from "Datas/Config";
import MakerNav from "./MakerNav";
import MakerDesc from "./MakerDesc";
import MakerSelection from "./MakerSelection";
import MakerInput from "./MakerInput";
import MakerHelper from "./MakerHelper";
import BigLoginButton from "Components/BigLoginButton";
import AgreementChk from "Components/AgreementChk";

class MakerMaking extends Component {
  state = {
    name: "",
    kind: "",
    user_name: "",
    user_email: "",
    phone_number: "",
    is_agreed: false,
    disabled: false
  };

  componentDidMount() {
    const key = window.localStorage.getItem("VALID_TOKEN");
    fetch(`${API_SH}/account/maker`, {
      method: "GET",
      headers: { Authorization: key }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          user_name: res.data[0].user_name,
          user_email: res.data[0].user_email
        });
      });
  }

  handleSubmit = e => {
    e.preventDefault();

    const { name, kind, phone_number, is_agreed } = this.state;

    fetch(`${API_SH}/fund/project`, {
      method: "POST",
      headers: {
        Authorization:
          "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoyLCJ1c2VyX2lzX21ha2VyIjpmYWxzZSwiZXhwIjoxNTc0NDg3NzUzfQ.ImpSLmihoK8qja3L9iEwLk2jKAxGaUAhoVDIb6mLTKA"
        //window.localStorage.getItem("VALID_TOKEN")
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log("성현님===", response);
        if (response.MESSAGE === "SUCCESS") {
        }
      });
    setTimeout(
      fetch(`${API_SH}/account/maker`, {
        method: "POST",
        headers: {
          Authorization: window.localStorage.getItem("VALID_TOKEN")
        },
        body: JSON.stringify({
          name,
          kind,
          phone_number,
          is_agreed: true
        })
      })
        .then(response => {
          response.json();
        })
        .then(response => {
          this.props.history.push("/maker/funding/baseinfo");
        }),
      1000
    );
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleDisabled = e => {
    this.setState({
      disabled: true
    });
  };

  handleAgree = e => {
    this.setState({
      is_agreed: true
    });
  };

  handleSelect = e => {
    this.setState({
      kind: e.target.value
    });
  };

  render() {
    const { name, kind, phone_number, is_agreed } = this.state;
    console.log(name, kind, phone_number, is_agreed);
    return (
      <MakerWrapper>
        <MakerNav />
        <MakerDesc />
        <MakerForm onSubmit={this.handleSubmit}>
          <MakerInput name="name" onChange={this.handleChange} type="text">
            메이커(기업)명
          </MakerInput>
          <MakerSelection name="kind" handleSelect={this.handleSelect} />
          <MakerInput
            name="user_name"
            value={this.state.user_name}
            disabled
            background="#efefef"
          >
            관리자 명
          </MakerInput>
          <MakerInput
            name="user_email"
            value={this.state.user_email}
            background="#efefef"
            disabled
          >
            관리자 이메일
          </MakerInput>
          <MakerHelper>
            관리자명과 이메일 주소는 로그인 아이디와 연동되어 있으므로 변경을
            원할 경우 회원 정보 설정에서 변경하세요.
          </MakerHelper>
          <MakerInput
            width="782px"
            display="inline-block"
            name="phone_number"
            onChange={this.handleChange}
          >
            관리자 휴대폰 번호
          </MakerInput>
          <AgreementChk name="is_agreed" />
          <MarginMaker>
            <BigLoginButton width="320px" radius="3px" type="submit">
              계속 진행하기
            </BigLoginButton>
          </MarginMaker>
        </MakerForm>
      </MakerWrapper>
    );
  }
}

const MakerWrapper = styled.div`
  margin-right: calc(50% - 500px);
  margin-left: calc(50% - 500px);
  padding: 40px 66px;
  height: 100%;
`;

const MakerForm = styled.form`
  position: relative;
`;

const MarginMaker = styled.div`
  margin-top: 80px;
`;

export default MakerMaking;
