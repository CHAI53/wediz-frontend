import React from "react";
import styled from "styled-components";
import { withRouter } from "react-router-dom";
import { API_SH } from "Datas/Config.js";
import AddRewardModal from "./AddRewardModal";
import HeaderForMakerStudio from "./HeaderForMakerStudio";
import MainArticle from "./MainArticle";
import DesignReward from "./DesignReward";
import BaseInfo from "./BaseInfo";

class MakerStudio extends React.Component {
  state = {
    showRewardAddModal: false,
    reward: []
  };

  openModal = () => {
    this.setState({
      showRewardAddModal: true
    });
  };

  closeModal = () => {
    this.setState({
      showRewardAddModal: false
    });
  };

  handleReward = (price, name, introduction, option, stock, scheduled_date) => {
    const { reward } = this.state;
    this.setState({
      reward
    });
  };

  deleteReward = index => {
    const { reward } = this.state;
    reward.splice(index, 1);
    this.setState({
      reward
    });
  };

  handlePost = () => {
    const { reward } = this.state;
    fetch(`${API_SH}/fund/reward`, {
      method: "post",
      headers: {
        Authorization: window.localStorage.getItem("VALID_TOKEN")
      },
      body: JSON.stringify({
        data: reward
      })
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  handleReward = (price, name, introduction, option, stock, scheduled_date) => {
    let newReward = {
      price,
      name,
      introduction,
      option,
      stock,
      scheduled_date
    };
    const { reward } = this.state;
    if (price && name && introduction && option && stock && scheduled_date) {
      this.setState({
        reward: reward.concat(newReward)
      });
      this.closeModal();
    } else {
      alert("모든 항목을 입력해주세요.");
    }
  };

  render() {
    const { showRewardAddModal, reward } = this.state;
    console.log(reward);
    return (
      <>
        <AddRewardModal
          show={showRewardAddModal}
          closeModal={this.closeModal}
          handleReward={this.handleReward}
        />
        <HeaderForMakerStudio />
        <MainArticleContainer>
          <MainArticle />
          {this.props.match.params.id === "design" ? (
            <DesignReward
              showModal={showRewardAddModal}
              openModal={this.openModal}
              handlePost={this.handlePost}
              deleteReward={this.deleteReward}
              data={reward}
            />
          ) : "baseInfo" ? (
            <BaseInfo />
          ) : (
            ""
          )}
        </MainArticleContainer>
      </>
    );
  }
}

export default withRouter(MakerStudio);

const MainArticleContainer = styled.main`
  display: flex;
`;
