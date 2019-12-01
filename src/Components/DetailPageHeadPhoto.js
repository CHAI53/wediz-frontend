import React, { Component } from "react";
import styled from "styled-components";
import { color } from "Styles/Common.js";

class DetailPageHeadPhoto extends Component {
  render() {
    return (
      <>
        <HeadPhotoContainer photo={this.props.photo}></HeadPhotoContainer>
        <BlurForPhoto></BlurForPhoto>
        <LocateTitle>
          <HeadCategory>{this.props.category}</HeadCategory>
          <HeadTitle>{this.props.title}</HeadTitle>
        </LocateTitle>
      </>
    );
  }
}
export default DetailPageHeadPhoto;

const HeadPhotoContainer = styled.div`
  width: 100%;
  height: 245px;
  background-image: url(https://cdn.wadiz.kr/wwwwadiz/green001/2019/1120/20191120161137455_52146.jpg/wadiz/format/jpg/quality/80/optimize);
  background-size: 150%;
  -webkit-filter: blur(3px);
  filter: blur(4px);
  background-position: -256px -97px;
`;

const BlurForPhoto = styled.div`
  width: 100%;
  top: 0;
  height: 245px;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.4));
  opacity: 0.2;
  z-index: 1;
  position: absolute;
  top: 56px;
`;

const HeadCategory = styled.div`
  font-size: 14px;
  color: ${color.blue};
  margin-bottom: 40px;
  z-index: 2;
`;

const HeadTitle = styled.div`
  color: white;
  font-weight: bolder;
  font-size: 35px;
  z-index: 2;
`;

const LocateTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 245px;
  top: 50px;
`;
