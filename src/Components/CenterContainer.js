import React from "react";
import styled from "styled-components";

const CenterContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default CenterContainer;

const Container = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 80px 0 96px 0;
  position: relative;
`;
