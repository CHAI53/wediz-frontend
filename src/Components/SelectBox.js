import React from "react";
import styled from "styled-components";
import { categoryList } from "Datas/BaseInfo";

const SelectBox = props => {
  return (
    <Select onChange={props.handleCategory}>
      {categoryList.map(e => {
        console.log(e.id);
        return <Option key={e.id}>{e.name}</Option>;
      })}
    </Select>
  );
};

export default SelectBox;

const Select = styled.select`
  width: 100%;
  height: 36px;
`;

const Option = styled.option``;
