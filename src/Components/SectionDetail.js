import React from "react";
import styled from "styled-components";

const SectionDetail = ({ children, ...props }) => {
  return <Detail>{children}</Detail>;
};
export default SectionDetail;

const Detail = styled.div`
  font-size: 13px;
  color: #90949c;
`;
