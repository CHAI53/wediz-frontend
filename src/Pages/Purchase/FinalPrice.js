import React from "react";
import styled from "styled-components";
import Table from "./Table";
import { color } from "Styles/Common.js";

const FinalPrice = props => {
  return (
    <Container>
      <Table
        description={props.total}
        title="펀딩 금액"
        background={color.dark_grey}
        borderBottom="none"
      />
      <Table
        title="쿠폰 차감 금액"
        background={color.dark_grey}
        description="-"
        borderBottom="none"
      />
      <Table
        title="추가 후원금"
        background={color.dark_grey}
        description={props.sponsor}
        borderBottom="none"
      />
      <Table
        title="배송비"
        background={color.dark_grey}
        description={props.data[0].delivery_fee}
        borderBottom="none"
      />
      <Table
        title="최종결제금액"
        background={color.dark_grey}
        description={props.total + props.sponsor}
        borderBottom="none"
        color={color.blue}
        size="22px"
      />
    </Container>
  );
};

export default FinalPrice;

const Container = styled.div``;
