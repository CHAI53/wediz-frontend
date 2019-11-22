import React, { Component } from "react";
import styled from "styled-components";
import ProjectTitle from "./ProjectTitle";
import Footer from "Components/Footer/Footer";

const ViewWrapper = styled.div``;

const Board = styled.div`
  border-top: 1px solid #e1e3e6;
  background: #f5f7fa;
  padding-top: 50px;
  padding-bottom: 160px;
  width: 100%;
  height: 740px;
`;

class ProjectView extends Component {
  render() {
    return (
      <section>
        <ViewWrapper>
          <ProjectTitle />
          <Board />
        </ViewWrapper>
        <Footer />
      </section>
    );
  }
}

export default ProjectView;
