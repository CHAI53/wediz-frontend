import React from "react";
import styled from "styled-components";

const CenterContainer = ({ children, ...props }) => {
  return <Container {...props}>{children}</Container>;
};

export default CenterContainer;

const Container = styled.div`
  max-width: ${props => props.maxWidth || "400px"};
  margin: ${props => props.margin || "0 auto"};
  padding: ${props => props.padding || "80px 0 96px 0"};
  position: ${props => props.position || "relative"};
  background-color: ${props => props.background || ""};
`;
