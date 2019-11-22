import React from "react";
import styled from "styled-components";

const View = styled.div``;

const Title = styled.h2`
  width: 960px;
  margin: 0 auto;
  padding: 56px 24px 24px;
  font-size: 36px;
  line-height: 44px;
  text-align: left;
  font-weight: bold;
`;

const ProjectTitle = () => {
  return (
    <View>
      <Title>만든 프로젝트</Title>
    </View>
  );
};

export default ProjectTitle;
