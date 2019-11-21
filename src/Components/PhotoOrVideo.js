import React from "react";
import styled from "styled-components";
import SquareChkBox from "./SquareChkBox.js";
import { color } from "Styles/Common.js";

const PhotoOrVideo = ({ children, ...props }) => {
  return (
    <VideoOrPhoto>
      <SelectPicOrVidChkBox
        id={props.id}
        radius="50px"
        display="none"
        checked={props.checked && "checked"}
        onClick={props.onClick}
      />
      <ButtonName id={props.id} name={props.id}>
        {children}
      </ButtonName>
    </VideoOrPhoto>
  );
};
export default PhotoOrVideo;

const SelectPicOrVidChkBox = styled(SquareChkBox)`
  position: relative;
  top: 7px;
  width: 25px;
  height: 25px;
  margin-right: 15px;

  ::before {
    position: absolute;
    display: inline-block;
    content: "";
    top: 2px;
    left: 10%;
    width: 80%;
    height: 80%;
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    transition: all 0.4s;
    border-radius: ${props => props.radius || ""};
  }
  :checked::before {
    position:absolute
    border-right: 1px solid #fff;
    border-bottom: 1px solid #fff;
    background-color: ${color.blue};
    transition: all 0.4s;
    width: 80%;
    height: 80%;
    top: 10%;
    left: 10%;
    
  }
  :checked {
    border: 1px solid #00a2a2;
  }

`;

const ButtonName = styled.span`
  color: #60656a;
  margin-left: 5px;
`;

const VideoOrPhoto = styled.div`
  width: 120px;
`;
