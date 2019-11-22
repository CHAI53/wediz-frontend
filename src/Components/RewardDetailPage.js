import React, { Component } from "react";
import NavBar from "Components/NavBar";
import DetailPageHeadPhoto from "./DetailPageHeadPhoto.js";
import StickyNav from "./StickyNav.js";
import MainPhoto from "./MainPhoto.js";
import MainArticleForDetailPage from "./MainArticleForDetailPage.js";
import styled from "styled-components";

class RewardDetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: [
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1021/20191021221924839_48691.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/ft/images/green002/2019/1024/20191024102655871_87.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/ft/images/green001/2019/1024/20191024103145563_87.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/ft/images/green001/2019/1024/20191024155404207_75.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize",
        "https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize"
      ],
      category: "푸드",
      title: "[곰세마리양조장] 꿀로 만든 술이 있을까요? 겨울의 제주, 밀감꿀술",
      endDate: "",
      targetGoad: "",
      htmlTag: ""
    };
  }
  //   componentDidMount() {
  //     axios(
  //       `http://10.58.2.241:8000/restaurant/category/${cat_id}?order_method=review_avg&pageNum=0`
  //     ).then(res => {
  //       console.log("date from fetch===", res);
  //       this.setState({
  //         restaurants: res.data.restaurants,
  //         additionalRenderNum: 0
  //       });
  //     });

  //     console.log("paramRendered===", this.props.match);
  //   }
  render() {
    return (
      <>
        <NavBar />
        <DetailPageHeadPhoto
          photo={this.state.photo[0]}
          title={this.state.title}
          category={this.state.category}
        />
        <StickyNav />
        <MainPhoto photo={this.state.photo[0]} />
        <MainArticleForDetailPage
          photo={this.state.photo}
          length={this.state.photo.length}
        />
        <footer></footer>
      </>
    );
  }
}

export default RewardDetailPage;
