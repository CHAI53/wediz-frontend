import React, { Component } from "react";
import styled from "styled-components";

class CategoryBtn extends Component {
  render() {
    console.log(this.props.data, "dsfs");
    return (
      <BtnWrapper>
        <Circle path={this.props.path} />
        <Desc>{this.props.name}</Desc>
      </BtnWrapper>
    );
  }
}

const Desc = styled.span`
  margin-top: 8px;
  line-height: 18px;
  white-space: nowrap;
  font-size: 13px;
  font-weight: 500;
`;

const Circle = styled.div`
  position: relative;
  transition-property: border-color, border-width;
  margin: 0 auto;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 50%;
  width: 56px;
  height: 56px;
  box-sizing: border-box;
  background-image: url(${props => props.path});
  background-size: cover;
`;

const BtnWrapper = styled.div`
  display: inline-block;
  margin: 0;
  padding: 21px 0 15px;
  width: 80px;
  height: 118px;
  text-align: center;
  text-indent: 0;
  font-size: 13px;
  box-sizing: border-box;
`;

export default CategoryBtn;
