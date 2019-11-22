import React from "react";
import styled from "styled-components";
// import { Container } from './styles';

const SectionForFormat = ({ children, ...props }) => {
  return <SectionForForm>{children}</SectionForForm>;
};
export default SectionForFormat;

const SectionForForm = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  padding-top: 47px;
  &:after {
    padding-top: 7px;
    width: 5px;
    display: inline-block;
    margin-left: 4px;
    color: #f66;
    content: "*";
  }
`;
