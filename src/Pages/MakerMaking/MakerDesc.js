import React from "react";
import styled from "styled-components";

const MakerDesc = () => {
  return (
    <MakerBar>
      <MakerTitle>메이커 정보</MakerTitle>
      <MakerDescription>
        먼저 메이커 정보를 입력하세요. 작성 후 펀딩 준비를 위한 콘텐츠 작성이
        가능합니다.
      </MakerDescription>
    </MakerBar>
  );
};

const MakerBar = styled.div`
  margin-top: 60px;
  margin-bottom: 32px;
`;

const MakerTitle = styled.h3`
  margin-bottom: 16px;
  line-height: 1;
  font-size: 28px;
  font-weight: 700;
`;

const MakerDescription = styled.p`
  margin: 2px 0;
  line-height: 1.33;
  font-size: 17px;
  font-weight: 300;
}
`;

export default MakerDesc;
