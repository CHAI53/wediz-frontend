import React, { Component } from "react";
import styled from "styled-components";
import { font, color } from "Styles/Common.js";

const FooterWrapper = styled.div`
  padding: 48px 16px 15px;
  box-shadow: inset 0 1px #ebeced;
  background: #fafbfc;
  line-height: 18px;
  color: #212121;
  font-size: ${font.size};
  margin-bottom: 24px;
  line-height: 20px;
`;

const CopyRight = styled.p`
  color: ${color.blue};
  font-weight: 700;
`;

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <CopyRight>시대를 만듭니다</CopyRight>
        <CopyRight>라이프스타일 투자플랫폼 와디즈</CopyRight>
        <CopyRight>© WADIZ Platform Co., Ltd.</CopyRight>
      </FooterWrapper>
    );
  }
}

export default Footer;
