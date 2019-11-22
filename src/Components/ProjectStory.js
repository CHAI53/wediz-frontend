import React from "react";
import SectionForFormat from "./SectionForFormat.js";
import SectionDetail from "./SectionDetail.js";
import MyEditor from "./MyEditor/MyEditor.js";
import SaveButton from "./SaveButton.js";
const ProjectStory = ({ sendSummary }) => {
  return (
    <>
      <SectionForFormat>프로젝트 스토리</SectionForFormat>
      <SectionDetail>
        진정성 있고 매력적인 스토리로 서포터의 마음을 움직여볼까요? <br></br>{" "}
        우측의 스토리 필수 항목을 꼼꼼하게 확인 후 작성해 주세요. <br></br> 필수
        항목이 누락될 경우 오픈이 지연될 수 있습니다.
      </SectionDetail>
      <MyEditor />
      <SaveButton onClick={sendSummary}>저장하기</SaveButton>
    </>
  );
};

export default ProjectStory;
