import React from "react";
import styled from "styled-components";
import { categoryList } from "Datas/Config.js";
import SquareChkBox from "Components/SquareChkBox.js";

const InterestList = props => {
  return (
    <Ul>
      {categoryList.map(e => (
        <Li key={e.id}>
          <CircleChkBox
            defaultChecked={false}
            name={e.value}
            radius="50%"
            onClick={props.onClick}
          />
          <Span>{e.key}</Span>
        </Li>
      ))}
    </Ul>
  );
};

export default InterestList;

const Ul = styled.ul`
  margin: 20px 0;
`;
const Li = styled.li`
  list-style: none;
  width: 50%;
  display: inline-block;
  margin-bottom: 10px;
  height: 20px;
`;

const Span = styled.span`
  font-size: 15px;
  line-height: 20px;
`;

const CircleChkBox = styled(SquareChkBox)`
  margin-right: 5px;
`;
