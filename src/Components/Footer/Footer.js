import React, { Component } from "react";
import styled from "styled-components";
import { font, color, device } from "Styles/Common.js";
//import icon from "Images/socialicon.png";

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <CopyRight>시대를 만듭니다</CopyRight>
        <CopyRight>라이프스타일 투자플랫폼 와디즈</CopyRight>
        <CopyRight>© WADIZ Platform Co., Ltd.</CopyRight>
        <Corp>
          <CorpDesc>와디즈 플랫폼 (주)</CorpDesc>
          <CorpDesc>대표이사 최동철</CorpDesc>
          <CorpDesc>사업자등록번호 220-88-37661</CorpDesc>
        </Corp>
        <Bold>
          경기도 성남시 분당구 판교로 242 (삼평동) 판교디지털센터 A동 4층 402호
        </Bold>
        <Bold>와디즈 대표 고객센터 1661-9056|info@wadiz.kr</Bold>
        <Bold>W9 멤버십 고객센터 1811-9090</Bold>
        <Danger>
          <p>투자위험고지</p>
          <p>
            비상장기업 투자는 원금 손실의 가능성이 크니 투자 위험 안내를 꼭
            확인하세요.
          </p>
          <p>
            와디즈플랫폼 (주)는 크라우드 펀딩 플랫폼을 제공하는 중개자로 자금을
            모집하는 당사자가 아니며, 투자손실의 위험을 보전하거나 보상품 제공을
            보장해 드리지 못합니다.
          </p>
        </Danger>
        <IconWrapper>
          <IconList>
            <Icons>
              <IconImg />
            </Icons>
          </IconList>
        </IconWrapper>
      </FooterWrapper>
    );
  }
}

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
  line-height: 25px;
`;

const Corp = styled.p`
  @media ${device.large} {
    margin-bottom: 32px;
    line-height: 24px;
    font-size: 17px;
  }
  margin-bottom: 24px;
  line-height: 20px;
  color: #00b2b2;
  font-size: 15px;
  font-weight: 700;
`;

const CorpDesc = styled.span`
  margin: 0 0.2em;
  color: #737374;
`;

const Bold = styled.p`
  margin-top: 10px;
  margin-bottom: 13px;
  line-height: 12px;
  font-size: 15px;
  font-weight: 700;
`;

const Danger = styled.blockquote`
  margin: 0 0 24px;
  border-color: #ebeced;
  border-style: solid;
  border-width: 1px 0;
  padding: 24px 0;
  word-break: keep-all;
  font-size: 12px;
  color: #e54545;
`;

const IconWrapper = styled.div`
  overflow: hidden;
  vertical-align: middle;
`;

const IconList = styled.ul`
  display: inline-block;
  vertical-align: middle;
`;

const Icons = styled.li`
  width: 100%;
  margin-right: 24px;
  display: flex;
  justify-content: space-around;
`;

const IconImg = styled.a`
  width: 10px;
  height: 10px;
  transition: color 0.2s;
  color: #212121;
  z-index: 100;
`;

export default Footer;
