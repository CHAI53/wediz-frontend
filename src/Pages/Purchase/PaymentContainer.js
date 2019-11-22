import React from "react";
import styled from "styled-components";
import SelectList from "./SelectList";
import Table from "./Table";

const PaymentContainer = props => {
  const { data, sponsor } = props;
  return (
    <Container>
      <SelectList data={data} />
      <Table description={sponsor} title="추가 후원금" />
      <Table
        description={data[0].delivery_fee}
        title="배송비"
        borderBottom="1px dashed black"
      />
      <Table
        description="사용가능한 쿠폰이 없습니다."
        title="쿠폰 사용"
        background="#f5f5f5"
      />
    </Container>
  );
};

export default PaymentContainer;

const Container = styled.div``;
