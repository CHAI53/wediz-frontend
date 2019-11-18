import React from "react";
import styled from "styled-components";

const TextWithLine = () => {
  return (
    <Or>
      <Span>또는</Span>
    </Or>
  );
};

export default TextWithLine;

const Or = styled.div`
  text-align: center;
  margin: 20px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
  line-height: 1px;
`;

const Span = styled.span`
  color: rgba(0, 0, 0, 0.54);
  background: #fff;
  padding: 0 10px;
  font-size: 12px;
`;
