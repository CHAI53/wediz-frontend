import React from "react";
import styled from "styled-components";

const SmallTitle = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

export default SmallTitle;

const Title = styled.div`
  font-size: ${props => props.size || "15px"};
  font-weight: 300;
  margin: ${props => props.margin || ""};
`;
