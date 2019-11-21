import React from "react";
import styled from "styled-components";
import SquareChkBox from "Components/SquareChkBox";
import { color } from "Styles/Common.js";

const RewardOption = props => {
  const {
    id,
    index,
    price,
    name,
    stock,
    delivery_fee,
    date,
    count,
    handleChange,
    handleCount,
    handleCheck,
    checked
  } = props;
  console.log(checked);
  return (
    <Label>
      <DescriptionList background={checked ? "#d6f5ef" : ""}>
        <Terms>
          <SquareChkBox
            defaultChecked={checked}
            onClick={() => handleCheck(index)}
          />
        </Terms>
        <Description>
          <PTag>{price}원 펀딩합니다.</PTag>
          <Span size="14px">{name}</Span>
          <Span>({stock}개 남음)</Span>
          <Option>
            배송비 {delivery_fee ? `${delivery_fee}원` : "없음"} | 리워드 제공
            예상일 : {date}
          </Option>
          {checked ? (
            <Wrapper>
              <Title>수량</Title>
              <Flex>
                <Button
                  margin="0 5px 0 0"
                  name="minus"
                  onClick={e => handleCount(e, index)}
                >
                  -
                </Button>
                <Input
                  value={count}
                  onChange={e => handleChange(e, index)}
                  type="number"
                ></Input>
                <Button
                  margin="0 0 0 5px"
                  name="plus"
                  onClick={e => handleCount(e, index)}
                >
                  +
                </Button>
              </Flex>
            </Wrapper>
          ) : (
            ""
          )}
        </Description>
      </DescriptionList>
    </Label>
  );
};

export default RewardOption;

const DescriptionList = styled.dl`
  border-radius: 5px;
  background-color: ${props => props.background || "#f9f9f9"};
  display: flex;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Terms = styled.dt`
  width: 100px;
  padding: 40px;
`;

const Description = styled.dd`
  padding: 20px;
`;

const Label = styled.label`
  input[type="checkbox"]:checked + dl {
    background-color: ${color.blue};
  }
`;

const PTag = styled.p`
  font-weight: 700;
  font-size: 18px;
  margin-bottom: 20px;
`;

const Span = styled.span`
  font-size: ${props => props.size || "12px"};
  margin-right: 10px;
`;

const Option = styled.p`
  font-size: 13px;
  margin-right: 10px;
  margin-top: 10px;
`;

const Wrapper = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin: ${props => props.margin || ""}
  transform: translate(0, 8px);
  padding: 0;
  border: 1px solid grey
  cursor: pointer;
  color: grey
  :active {
      border: 1px solid ${color.blue}
      color: ${color.blue}
  }
`;

const Flex = styled.div`
  margin-top: 5px;
  display: flex;
`;

const Input = styled.input`
  width: 70px;
  height: 32px;
  text-align: right;
  border: 1px solid ${color.blue};
  border-radius: 3px;
  padding: 0 10px;
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Title = styled.p`
  font-size: 13px;
  margin: 20px 0 15px 0;
`;
