import React, { Component } from "react";
import styled from "styled-components";

const ListWrapper = styled.ul`
  width: 960px;
  margin: -2px auto 0;
  padding: 0 9px;
  list-style: none;
  border: 0;
`;

class ProjectList extends Component {
  render() {
    return <ListWrapper></ListWrapper>;
  }
}

export default ProjectList;
