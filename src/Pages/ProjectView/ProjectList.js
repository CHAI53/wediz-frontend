import React, { Component } from "react";
import styled from "styled-components";
import ProjectItem from "./ProjectItem";
import { device } from "Styles/Common.js";

class ProjectList extends Component {
  render() {
    return (
      <ListWrapper>
        <ProjectItem />
      </ListWrapper>
    );
  }
}

const ListWrapper = styled.ul`
  @media ${device.small} {
    list-style: none;
    border: 0;
  }
  width: 960px;
  margin: -2px auto 0;
  padding: 0 9px;
  list-style: none;
  border: 0;
`;

export default ProjectList;
