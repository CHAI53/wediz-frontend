import React from "react";
import styled from "styled-components";
import { device } from "Styles/Common.js";

const Table = props => {
  return (
    <Container background={props.background} borderBottom={props.borderBottom}>
      <Terms color={props.color}>{props.title}</Terms>
      <Description color={props.color} size={props.size}>
        {props.description === null
          ? "없음"
          : typeof props.description === "number"
          ? props.description + "원"
          : props.description}
      </Description>
    </Container>
  );
};

export default Table;

const Container = styled.dl`
  width: 100%;
  display: table;
  border-bottom: ${props => props.borderBottom || "1px solid #efefef"};
  background-color: ${props => props.background || ""};
`;

const Terms = styled.dt`
  width: 140px;
  display: table-cell;
  padding: 15px 0 15px 15px;
  font-size: 14px;
  font-weight: 500;
  color: ${props => props.color || ""};
`;

const Description = styled.dd`
  display: table-cell;
  text-align: right;
  padding: 15px 15px 15px 0;
  font-size: ${props => props.size || "14px"};
  font-weight: 500;
  color: ${props => props.color || ""};
  @media ${device.middle} {
  }
`;
