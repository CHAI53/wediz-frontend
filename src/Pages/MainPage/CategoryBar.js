import React, { Component } from "react";
import styled from "styled-components";
import data from "./Data.js";
import CategoryBtn from "./CategoryBtn";

class CategoryBar extends Component {
  constructor() {
    super();
    this.state = {
      data
    };
  }
  render() {
    console.log("aaa==");
    const { data } = this.state;
    const list = data.map(el => <CategoryBtn path={el.path} name={el.name} />);
    console.log("aaa==", this.state.m);
    return <CategoryWrapper>{list}</CategoryWrapper>;
  }
}

const CategoryWrapper = styled.div`
  margin: 40px auto;
  max-width: 1032px;
  position: relative;
  height: 118px;
  overflow: hidden;
  display: flex;
  justify-content: space-around;
`;

export default CategoryBar;
