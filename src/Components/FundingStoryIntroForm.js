import React, { Fragment, Component } from "react";
import styled, { css } from "styled-components";
import PhotoOrVideo from "./PhotoOrVideo.js";
import SectionForFormat from "./SectionForFormat.js";
import SectionDetail from "./SectionDetail.js";
import { color } from "Styles/Common.js";
import CameraIcon from "Images/camera11.png";
import VideoIcon from "Images/video11.png";
// import axios from "axios";

class FundingStoryIntroForm extends Component {
  state = {
    switching: "photo",
    vid: "vid",
    photo: "photo",
    file: [],
    imagePreviewUrl: []
  };
  handleSwitchPost = switching => {
    this.setState({
      switching: switching
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("handle uploading-", this.state.file);
    console.log("handle uploading-", this.state.imagePreviewUrl);
    console.log("typeof filelist===", this.state.file[0]);
    const { file } = this.state;
    const formData = new FormData();
    // if (file.length >0) {
    //   for (let i=0; i < file.length; i++) {
    //     formData.append("photo", file[i], file[i].name)
    //   }
    // }
    // axios
    // .post('', formData, {
    //   headers: {
    //     key: "value"
    //   }
    // })
    // .then(res=> console.log(res))
  };

  handleImagePreview = event => {
    event.preventDefault();
    console.log("event.target.files===?", event.target.files);
    console.log("multiple upload working?");
    console.log("file array?===", Array.isArray(event.target.files));
    console.log("file type?===", typeof event.target.files);
    console.log("file ?===", event.target.files);

    const files = event.target.files;

    const readAndPreview = file => {
      // Make sure `file.name` matches our extensions criteria
      // if (/\.(jpe?g|png|gif)$/i.test(file.name)) {/
      console.log(file);
      var reader = new FileReader();
      const self = this;
      reader.addEventListener(
        "load",
        function() {
          console.log("reader addEventListener");
          console.log(self);
          self.setState(
            {
              file: self.state.file.concat(file),
              imagePreviewUrl: self.state.imagePreviewUrl.concat(this.result)
            },
            () => {
              console.log(
                "imagePreviewUrlimagePreviewUrl",
                self.state.imagePreviewUrl
              );
            }
          );
          // var image = new Image();
          // image.height = 100;
          // image.title = file.name;
          // image.src = this.result;
          // preview.appendChild(image);
        },
        false
      );

      reader.readAsDataURL(file);
      // }
    };

    if (files) {
      console.log("if");

      // readAndPreview(files[i])
      [].forEach.call(files, readAndPreview);
    }

    return;

    // const reader = new FileReader();
    // let files = [];
    // let filesToPost = event.target.files;
    // for (let i = 0; i < event.target.files.length; i++) {
    //   files = files.concat(event.target.files[i]);
    // }
    // console.log("newfile===", newfile);
    // console.log("newfiles===", newfiles);
    // console.log("newfile type===", typeof newfile[0]);
    // console.log("newfiles type===", typeof newfiles[0]);
    // // let newfileUrl = [null];
    // // for (let i = 0; i < newfile.length; i++) {
    // //   newfileUrl = newfileUrl.concat(reader.readAsDataURL(newfile[i]));
    // // }
    // // console.log("newfileUrl=====", newfileUrl);

    // // {
    // //   newfile && reader.readAsDataURL(newfile[0]);
    // // }
    // for (let i = 0; i < event.target.files.length; i++) {
    //   reader.onloadend = () => {
    //     console.log("handleImagePreview - result", reader.result);
    //     this.setState({
    //       // file: this.state.file.concat(newfiles),
    //       imagePreviewUrl: this.state.imagePreviewUrl.concat(reader.result)
    //     });
    //   };

    //   reader.readAsDataURL(event.target.files[i]);
    // }

    // let reader = new FileReader();
    // let newfile = [];
    // newfile = newfile.concat([event.target.files]);
    // let newfiles = [];
    // for (let i = 0; i < newfile.length; i++) {
    //   newfiles = newfiles.concat(newfile[i][0]);
    // }
    // console.log("newfile===", newfile);
    // console.log("newfiles===", newfiles);
    // console.log("newfile type===", typeof newfile[0]);
    // console.log("newfiles type===", typeof newfiles[0]);
    // // let newfileUrl = [null];
    // // for (let i = 0; i < newfile.length; i++) {
    // //   newfileUrl = newfileUrl.concat(reader.readAsDataURL(newfile[i]));
    // // }
    // // console.log("newfileUrl=====", newfileUrl);

    // // {
    // //   newfile && reader.readAsDataURL(newfile[0]);
    // // }
    // for (let i = 0; i < event.target.files.length; i++) {
    //   reader.onloadend = () => {
    //     console.log("handleImagePreview - result", reader.result);
    //     this.setState({
    //       // file: this.state.file.concat(newfiles),
    //       imagePreviewUrl: this.state.imagePreviewUrl.concat(reader.result)
    //     });
    //   };

    //   reader.readAsDataURL(event.target.files[i]);
    // }
  };
  handleDelete = event => {
    console.log("handleDelete is working");
    console.log(event.target.name);
    const nth = event.target.name;
    const { imagePreviewUrl } = this.state;
    const virtualState = this.state.imagePreviewUrl;
    virtualState.splice(nth, 1);
    const remainPhotoFile = this.state.file;
    remainPhotoFile.splice(nth, 1);
    this.setState({
      file: remainPhotoFile,
      imagePreviewUrl: virtualState
    });
  };

  render() {
    console.log("state.file===", this.state.file);
    console.log("state.file[0]===", this.state.file[0]);
    console.log("type of state.file===", typeof this.state.file);
    console.log("is state.file array?===", Array.isArray(this.state.file));
    const { switching, vid, photo, imagePreviewUrl } = this.state;
    const previewPhoto = imagePreviewUrl.map((photo, index) => (
      <PreviewImgCell>
        <PreviewImage src={photo} />
        <DeleteButton
          type="button"
          name={index}
          onClick={this.handleDelete}
          key={photo.index}
        >
          {photo.index}
        </DeleteButton>
      </PreviewImgCell>
    ));
    // const DeletButton = imagePreviewUrl.map(pic => (
    //   <button type="button" name={imagePreviewUrl.length}></button>
    // ));
    console.log("imagePreviewUrl", this.state.imagePreviewUrl);
    return (
      <>
        <form>
          <SectionForFormat>소개 영상·사진 등록</SectionForFormat>
          <SectionDetail>
            프로젝트 페이지 상단에 노출될 영상 또는 사진을 올려주세요.
          </SectionDetail>
          <ButtonSelectContainer>
            <PhotoOrVideo
              id="vid"
              checked={switching === vid}
              onClick={() => {
                this.handleSwitchPost("vid");
              }}
            >
              소개 영상
            </PhotoOrVideo>
            <PhotoOrVideo
              id="photo"
              checked={switching === photo}
              onClick={() => {
                this.handleSwitchPost("photo");
              }}
            >
              소개 사진
            </PhotoOrVideo>
            {switching === photo && (
              <>
                <PostPicBackground>
                  <form onSubmit={event => this.handleSubmit(event)}>
                    {/* <PostPicContainer> */}
                    <PostPic
                      accept="image/JPEG,image/JPG,image/GIF,image/PNG"
                      type="file"
                      name="pictureIntro[]"
                      multiple
                      onChange={event => this.handleImagePreview(event)}
                    ></PostPic>
                    <CameraIconDiv></CameraIconDiv>
                    <PostPicButton
                      // type="button"
                      placeholder="등록하기"
                    >
                      등록하기
                    </PostPicButton>
                    <PostPicDetail>
                      <div>2MB 이하의 JPEG, JPG, GIF, PNG 파일</div>
                      <div>사이즈 : 최소 630X400 픽셀 이상</div>
                      <div>여러 장 등록 가능</div>
                    </PostPicDetail>
                    {/* </PostPicContainer> */}
                  </form>
                </PostPicBackground>
                {imagePreviewUrl.length >= 1 && (
                  <PreviewContainer>
                    {imagePreviewUrl && previewPhoto}
                  </PreviewContainer>
                )}
              </>
            )}
            {switching === vid && (
              <>
                <PostPicBackground>
                  <form onSubmit={event => this.handleSubmit(event)}>
                    {/* <PostPicContainer> */}
                    <PostPic
                      accept="image/JPEG,image/JPG,image/GIF,image/PNG"
                      type="file"
                      name="pictureIntro[]"
                      multiple="true"
                      onChange={event => this.handleImagePreview(event)}
                    ></PostPic>
                    <CameraIconDiv CameraVersion></CameraIconDiv>
                    <PostPicButton
                      // type="button"
                      placeholder="등록하기"
                      disabled
                    >
                      등록하기
                    </PostPicButton>
                    <PostPicDetail>
                      <div>Youtube와 Vimeo의 URL등록 가능</div>
                      <div>영상 썸네일 이미지 사이즈 : 600 픽셀 이상</div>
                    </PostPicDetail>
                    {/* </PostPicContainer> */}
                  </form>
                </PostPicBackground>
              </>
            )}
          </ButtonSelectContainer>
        </form>
      </>
    );
  }
}

export default FundingStoryIntroForm;

const ButtonSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* height: 80px; */
  margin-top: 30px;
`;

// const PicBox = styled.div`
//   width: 120px;
// `;

const PostPicBackground = styled.div`
  width: 243px;
  position: relative;
`;

const PostPicContainer = styled.label`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 40px;
  left: 30px;
  /* z-index: 1; */
`;
const PostPic = styled.input`
  position: relative;
  opacity: 0;
  z-index: 3;
  max-width: 29px;
  max-height: 35px;
  top: 28px;
  left: 71px;
`;

const PostPicButton = styled.button`
  padding-left: 60px;
  appearance: none;
  position: relative;
  width: 160px;
  height: 70px;
  border: 1px solid silver;
  border-radius: 15px;
  top: 29px;
  left: 16px;
  :hover {
    border: 1px solid #00a2a2;
    color: #00a2a2;
  }
  &:checked {
    border: 1px solid #00a2a2;
  }
`;

const CameraIconDiv = styled.span`
position: absolute;
  background-image: url('${CameraIcon}');
  background-size: 100%;
    width: 30px;
    height: 30px;
    z-index: 1;
    left: 69px;
    top: 48px;
  ${props =>
    props.CameraVersion &&
    css`
  background-image: url('${VideoIcon}');
  `}
`;

const PostPicDetail = styled.div`
  color: #90949c;
  position: relative;
  margin-left: 45px;
  font-size: 12px;
  margin-bottom: 40px;
  top: 56px;
  left: 4px;
`;

const PreviewImage = styled.img`
  max-width: 200px;
  max-height: 400px;
`;
const PreviewContainer = styled.div`
  content: "ㅁ";
  border: 1px solid ${color.blue};
  border-radius: 3px;
  display: flex;
  /* overflow-x: auto; */
  min-width: 500px;
  min-height: 300px;
  max-width: 800px;
  max-height: 300px;
  overflow-x: scroll;
  margin-top: 60px;
  /* overflow: hidden; */
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    background-color: white;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${color.blue};
    border-radius: 10px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  ::-webkit-scrollbar-button:start:decrement,
  ::-webkit-scrollbar-button:end:increment {
    width: 16px;
    height: 16px;
    background: white;
  }
`;

const DeleteButton = styled.input`
  width: "15px";
  height: "15px";
  background-color: ${color.blue};

  border: 1px solid white;
`;
const PreviewImgCell = styled.div``;
