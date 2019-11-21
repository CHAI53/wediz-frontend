import React, { Component } from "react";
import styled from "styled-components";
import SquareChkBox from "Components/SquareChkBox";

class DescriptionList extends Component {
  state = {
    rewardPolicy: "none",
    deliveryPolicy: "none"
  };

  handleClick = e => {
    const name = e.target.name;
    this.state[name] === "none"
      ? this.setState({ [name]: "block" })
      : this.setState({ [name]: "none" });
  };

  render() {
    const { data, onClick } = this.props;
    const { rewardPolicy, deliveryPolicy } = this.state;
    return (
      <>
        <Terms>
          <ChkWithSenteces
            radius="50%"
            textColor="rgba(0,0,0,0.3)"
            checkedColor="rgba(0,0,0,0.8)"
            onClick={onClick}
            name="firstCheck"
          >
            펀딩한 리워드는 새롭게 준비하고 있는 제품, 서비스입니다.
          </ChkWithSenteces>
        </Terms>
        <Description>
          <Content margin="0 0 10px 0">
            펀딩 후, 리워드를 제작・준비하는 크라우드펀딩 특성상, 품질 이슈가
            발생할 수 있습니다.
          </Content>
          <Content>
            리워드 품질 이슈 발생 시 <Strong>메이커의 리워드 관련 정책</Strong>
            을 꼭 확인해주세요.
          </Content>
        </Description>
        <Description>
          <Content color="rgba(0,0,0,0.5)">
            {data.company_name}의 리워드 관련 정책{" "}
            <Button name="rewardPolicy" onClick={this.handleClick}>
              >
            </Button>
          </Content>
          <Content
            display={rewardPolicy}
            margin="15px 0 0 0"
            size="13px"
            color="rgba(0,0,0,0.5)"
            lineHeight="16px"
          >
            - 제품 하자로 인한 교환/수리 시, 발생하는 비용은 전액 메이커가
            부담합니다
            <br /> - 리워드 수령 {data.refund_period}일 이내 제품 하자로 인한
            교환/수리 문의는 {data.phone_number} 로 신청 가능합니다. <br />-
            제품 하자가 아닌 서포터님 부주의로 인한 제품 손상은 유상수리해
            드립니다. <br />- 교환/환불/AS 요청자 정보와 서포터 정보의 일치 여부
            확인 후, 진행됩니다. <br />
            <br />
            ※교환/환불/AS 불가능한 경우 <br />- 서포터의 책임 있는 사유로
            리워드가 멸실/훼손된 경우 (단지 확인을 위한 포장 훼손 제외) <br />-
            서포터의 사용/소비에 의해 리워드의 가치가 감소한 경우 <br />- 시간
            경과로 인해 재판매가 곤란할 정도로 리워드의 가치가 상실한 경우{" "}
            <br />- 서포터의 단순 변심 <br />- 메이커를 통한 교환/환불/AS 접수
            절차 없이 임의로 반송한 경우 <br />- 복제가 가능한 리워드의 포장을
            훼손한 경우 <br />- 펀딩/판매/생산방식 특성상, 교환/환불 시
            메이커에게 회복할 수 없는 손해가 발생한 경우 (펀딩 마감 후, 개별
            생산, 맞춤 제작 등)
          </Content>
        </Description>
        <Terms margin="10px 0 0 0">
          <ChkWithSenteces
            radius="50%"
            textColor="rgba(0,0,0,0.3)"
            checkedColor="rgba(0,0,0,0.8)"
            onClick={onClick}
            name="secondCheck"
          >
            바로 결제되지 않으며, 펀딩 종료 후에는 결제를 취소할 수 없습니다.
          </ChkWithSenteces>
        </Terms>
        <Description>
          <Content margin="0 0 10px 0">
            펀딩이 종료되고 목표 금액이 달성될 경우
            <Strong>{data.payment_day}</Strong>에 결제가 진행됩니다.
          </Content>
          <Content>
            펀딩 종료 <Strong>{data.deadline_day}</Strong> 이후에는 메이커의
            프로젝트 수행을 위해 결제 취소가 불가합니다.
          </Content>
        </Description>
        <Terms margin="10px 0 0 0">
          <ChkWithSenteces
            radius="50%"
            textColor="rgba(0,0,0,0.3)"
            checkedColor="rgba(0,0,0,0.8)"
            onClick={onClick}
            name="thirdCheck"
          >
            펀딩한 리워드는 즉시 배송되지 않습니다.
          </ChkWithSenteces>
        </Terms>
        <Description>
          <Content margin="0 0 10px 0">
            메이커가 약속한 리워드 발송 시작일을 확인했나요? 메이커는 펀딩이
            성공해야 리워드 제작・준비를 진행합니다.
          </Content>
          <Content>
            리워드 펀딩 특성상 발송이 지연되거나 불가할 수 있으니,
            <Strong> 메이커의 발송 지연 정책</Strong>을 꼭 확인해주세요.
          </Content>
        </Description>
        <Description>
          <Content color="rgba(0,0,0,0.5)">
            {data.company_name} 발송 지연 정책
            <Button name="deliveryPolicy" onClick={this.handleClick}>
              >
            </Button>
          </Content>
          <Content
            display={deliveryPolicy}
            margin="15px 0 0 0"
            size="13px"
            color="rgba(0,0,0,0.5)"
            lineHeight="16px"
          >
            리워드 발송이 {data.delivery_postpone} 까지 지연될 수 있습니다. 펀딩
            받은 후, 리워드를 제작할 수 있는 크라우드펀딩의 특성과 생산
            과정에서의 예상치 못한 상황으로 인하여 리워드 발송이 지연되거나
            발송이 불가할 수 있습니다.
            <br />
            <br /> 위 기간까지 리워드 발송이 시작되지 않은 경우 <br />
            &bull; 리워드 발송일 변동이 예상되는 시점에 즉시 새소식과 SMS으로
            변경된 리워드 제공일을 알려 드립니다. <br />
            &bull; 위 기간까지 배송 지연 시, '상세페이지 우측 상단의 메이커
            연락처/이메일주소'를 통해 메이커에게 환불 신청하실 수 있습니다.
            <br />
            <br />
            펀딩금이 리워드 생산자금으로 사용되는 크라우드펀딩 특성상 즉시
            환불은 어려울 수 있으며 환불 일정 및 방법은 메이커가 새소식으로
            공지드립니다.
          </Content>
        </Description>
      </>
    );
  }
}
export default DescriptionList;

const Terms = styled.dt`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 10px;
  margin: ${props => props.margin || ""};
`;

const ChkWithSenteces = styled(SquareChkBox)``;

const Description = styled.dd`
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 16px;
  border-top: none;
`;

const Content = styled.p`
  color: ${props => props.color || ""};
  font-size: ${props => props.size || "15px"};
  word-break: keep-all;
  line-height: ${props => props.lineHeight || "20px"};
  margin: ${props => props.margin || ""};
  display: ${props => props.display || ""};
`;

const Strong = styled.span`
  font-weight: 700;
`;

const Button = styled.button`
  float: right;
  width: 24px;
  height: 24px;
`;
