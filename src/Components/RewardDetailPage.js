import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "Components/NavBar";
import DetailPageHeadPhoto from "./DetailPageHeadPhoto";
class RewardDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize"
      ],
      category: "푸드",
      title: "[곰세마리양조장] 꿀로 만든 술이 있을까요? 겨울의 제주, 밀감꿀술",
      endDate: "",
      targetGoad: ""
    };
  }
  render() {
    return (
      <>
        <NavBar />
        <DetailPageHeadPhoto
          photo={this.state.photo[0]}
          title={this.state.title}
          category={this.state.category}
        />
        <nav></nav>
        <div mainphoto></div>
        <div two div container which has flex-direction of two column>
          <div
            two
            column
            component
            composed
            with
            picture
            and
            text
            from
            story
          ></div>
          <div right part of main article></div>
        </div>
        <footer></footer>
      </>
    );
  }
}

export default RewardDetailPage;
