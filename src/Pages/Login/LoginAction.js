import React from "react";
import styled from "styled-components";
import SquareChkBox from "Components/SquareChkBox";

const LoginAction = () => {
  return (
    <Action>
      <div>
        <SquareChkBox />
        <Save>아이디 저장</Save>
      </div>
      <div>
        <Find>아이디 &#183; 비밀번호 찾기</Find>
        <Find>></Find>
      </div>
    </Action>
  );
};

export default LoginAction;

const Action = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
  color: rgba(0, 0, 0, 0.54);
  div {
    display: flex;
  }
`;

const Save = styled.span`
  font-size: 13px;
  font-weight: 300;
  margin-left: 5px;
  line-height: 20px;
`;

const Find = styled.span`
  font-size: 13px;
  font-weight: 300;
  cursor: pointer;
`;
