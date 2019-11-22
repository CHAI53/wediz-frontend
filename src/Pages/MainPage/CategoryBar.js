import React, { Component } from "react";
import styled from "styled-components";
import Data from "./Data.js";
import CategoryBtn from "./CategoryBtn";

class CategoryBar extends Component {
  constructor() {
    super();
    this.state = {
      Data
    };
  }
  render() {
    const { Data } = this.state;
    const list = Data.map(el => <CategoryBtn path={el.path} name={el.name} />);
    return <CategoryWrapper>{list}</CategoryWrapper>;
  }
}

const CategoryWrapper = styled.div`
  margin: 40px auto;
  max-width: 1032px;
  position: relative;
  height: 118px;
  overflow: hidden;
`;

export default CategoryBar;
