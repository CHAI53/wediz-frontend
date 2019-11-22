import React, { Component } from "react";
import styled from "styled-components";
import BigLoginButton from "Components/BigLoginButton.js";
import MakerNav from "./MakerNav";
import MakerDesc from "./MakerDesc";
import MakerSelection from "./MakerSelection";
import MakerInput from "./MakerInput";
import MakerHelper from "./MakerHelper";

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

const Agree = styled.span`
  font-size: 15px;
  color: #60656a;
  margin-left: 5px;
  line-height: 20px;
  display: inline-block;
`;

class MakerMaking extends Component {
  render() {
    return (
      <MakerWrapper>
        <MakerNav />
        <MakerDesc />
        <MakerForm>
          <MakerInput>메이커(기업)명</MakerInput>
          <MakerSelection />
          <MakerInput>관리자 명</MakerInput>
          <MakerInput>관리자 이메일</MakerInput>
          <MakerHelper>
            관리자명과 이메일 주소는 로그인 아이디와 연동되어 있으므로 변경을
            원할 경우 회원 정보 설정에서 변경하세요.
          </MakerHelper>
          <MakerInput width="782px" display="inline-block">
            관리자 휴대폰 번호
          </MakerInput>
          <MakerHelper>인증을 완료한 회원입니다.</MakerHelper>
          <Agree>(필수)개인 정보 수집 동의</Agree>
        </MakerForm>
        <MarginMaker>
          <BigLoginButton width="320px" radius="3px">
            계속 진행하기
          </BigLoginButton>
        </MarginMaker>
      </MakerWrapper>
    );
  }
}

export default MakerMaking;
