import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { API_TS } from "Datas/Config.js";
import NavBar from "Components/NavBar";
import ProgressCircle from "Components/ProgressCircle";
import BigLoginButton from "Components/BigLoginButton";
import RewardHeader from "Components/RewardHeader";
import RewardOption from "./RewardOption";
import PurchaseModal from "./PurchaseModal";
import SubHeader from "./SubHeader";
import SponsorInput from "./SponsorInput";
import TotalFunding from "./TotalFunding";
import { device, color } from "Styles/Common.js";

export class RewardList extends Component {
  state = {
    show: false,
    sponsor: 0,
    data: [],
    fundContext: {
      company_name: "(주)마이노멀컴퍼니",
      deadline_day: "2019.11.29",
      payment_day: "2019.12.02",
      refund_period: 30,
      phone_number: "033-378-0794",
      delivery_postpone: "2020.01.11",
      title: "피로한 당신의 간! 수라 진 플러스로 지켜보세요!",
      img_url:
        "https://cdn.wadiz.kr/wwwwadiz/green002/2019/1030/20191030181054654_47600.jpg/wadiz/resize/600/format/jpg/quality/80/optimize"
    },
    quantity: [],
    name: [],
    stock: [],
    price: [],
    check: [],
    seller_product_number: [],
    total: 0
  };

  componentDidMount = () => {
    fetch(`${API_TS}/fund/reward`, {
      headers: {
        Authorization: window.localStorage.getItem("VALID_TOKEN")
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res);
        this.setState({
          data: res.data
        });
      });
  };

  componentDidUpdate = (prevProps, prevState) => {
    const { data } = this.state;
    if (prevState.data !== data) {
      const { data } = this.state;
      let quantity = [];
      let check = [];
      let name = [];
      let stock = [];
      let price = [];
      data.forEach(e => {
        name.push(e.name);
        stock.push(e.stock);
        price.push(e.price);
        check.push(false);
        quantity.push(0);
      });
      this.setState({
        quantity,
        stock,
        price,
        check,
        name
      });
    }
  };

  handleCheck = index => {
    const { check, quantity } = this.state;
    check[index] = !check[index];
    this.setState(
      {
        check
      },
      () => {
        if (!check[index]) {
          quantity[index] = 0;
        } else {
          quantity[index] = 1;
        }
        this.setState({
          quantity
        });
      }
    );
  };

  handleChange = (e, index) => {
    const { quantity, stock } = this.state;
    quantity[index] = e.target.value;
    this.setState(
      {
        quantity
      },
      () => {
        if (stock[index] < quantity[index]) {
          alert("잔여수량 내에서 수량을 선택해주세요.");
          quantity[index] = stock[index];
        } else if (quantity[index] < 1) {
          alert("1개 이하로 수량을 선택할 수 없습니다.");
          quantity[index] = 1;
        }
        this.setState({
          quantity
        });
      }
    );
  };

  handleCount = (e, index) => {
    const name = e.target.name;
    const { quantity, stock } = this.state;
    if (name === "plus") {
      if (stock[index] > quantity[index]) {
        quantity[index]++;
      } else {
        alert("잔여수량 내에서 수량을 선택해주세요.");
        quantity[index] = stock[index];
      }
    } else {
      if (quantity[index] <= 1) {
        alert("1개 이하로 수량을 선택할 수 없습니다.");
        quantity[index] = 1;
      } else {
        quantity[index]--;
      }
    }
    this.setState({
      quantity
    });
  };

  handleSponsor = e => {
    this.setState({
      sponsor: e.target.value
    });
  };

  closeModal = () => {
    this.setState({
      show: true
    });
  };

  goToPurchase = () => {
    const { data, quantity, sponsor } = this.state;
    data.forEach((e, index) => {
      e["quantity"] = quantity[index];
    });

    const selected_data = [];
    data.forEach(e => {
      if (e.quantity !== 0) {
        selected_data.push(e);
      }
    });
    this.props.history.push("/purchase");
    fetch(`${API_TS}/order/`, {
      method: "post",
      headers: {
        Authorization: window.localStorage.getItem("VALID_TOKEN")
      },
      body: JSON.stringify({
        data: selected_data,
        sponsor
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
    console.log(selected_data);
    window.localStorage.setItem("data", JSON.stringify(selected_data));
    window.localStorage.setItem("sponsor", this.state.sponsor);
  };

  render() {
    const {
      show,
      sponsor,
      fundContext,
      quantity,
      check,
      price,
      data
    } = this.state;
    let reward_total = 0;
    let totalFunding = 0;
    if (data) {
      for (let i = 0; i < data.length; i++) {
        reward_total = reward_total + price[i] * quantity[i];
      }
      totalFunding = Number(sponsor) + reward_total;
    }
    return (
      <>
        <PurchaseModal
          show={show}
          data={fundContext}
          onClick={this.closeModal}
        />
        <Main position={show ? "" : "fixed"}>
          <NavBar />
          <RewardHeader data={fundContext} />
          <Container>
            <ProgressCircle
              firstCircle={color.blue}
              firstBorder="none"
              firstColor="white"
            />
            <SubHeader />
            <RewardContainer>
              {data.map((e, index) => {
                return (
                  <RewardOption
                    key={e.id}
                    id={e.id}
                    index={index}
                    price={e.price}
                    name={e.name}
                    option={e.option}
                    stock={e.stock}
                    delivery_fee={e.delivery_fee}
                    date={e.scheduled_date}
                    handleChange={this.handleChange}
                    count={quantity[index]}
                    handleCount={this.handleCount}
                    checked={check[index]}
                    handleCheck={this.handleCheck}
                  />
                );
              })}
            </RewardContainer>
            <SponsorInput onChange={this.handleSponsor} value={sponsor} />
            <TotalFunding data={fundContext} total={totalFunding} />
            <ButtonContainer>
              <NextButton onClick={this.goToPurchase} radius="3px">
                다음 단계로 >
              </NextButton>
            </ButtonContainer>
          </Container>
        </Main>
      </>
    );
  }
}

export default withRouter(RewardList);

const Main = styled.main`
  width: 100%;
  min-width: 400px;
  top: 0;
  position: ${props => props.position || ""}
  background-color: ${props => props.background || ""};
`;

const Container = styled.div`
  max-width: 860px;
  margin: 0 auto;
  padding-bottom: 100px;
  @media ${device.middle} {
    width: 100%;
  }
`;

const RewardContainer = styled.div`
  margin: 40px 0;
  @media ${device.middle} {
    padding: 0 10px;
  }
`;

const ButtonContainer = styled.div`
  text-align: center;
`;

const NextButton = styled(BigLoginButton)`
  width: 154px;
  height: 48px;
  display: inline-block;
  margin-top: 20px;
`;
