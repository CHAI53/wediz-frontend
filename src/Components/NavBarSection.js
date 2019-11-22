import React, { Component } from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

class NavBarSection extends Component {
  constructor(props) {
    super(props);
  }
  handleCheck = () => {
    console.log("working");
  };
  render() {
    console.log("aaaa", this.props.data);
    let { id, menu, count } = this.props.data;

    return (
      <Section name={id}>
        <SectionTitle onClick={this.handleCheck}>{menu}</SectionTitle>
        {count && <SectionCount>{count}</SectionCount>}
      </Section>
    );
  }
}
export default NavBarSection;

const Section = styled.span`
  margin: 0 30px;
  width: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SectionTitle = styled.span`
  font-size: 17px;
  cursor: pointer;
`;

const SectionCount = styled.span`
  font-size: 8px;
  color: ${color.blue};
`;
