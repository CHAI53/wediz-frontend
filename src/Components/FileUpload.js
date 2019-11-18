import React from "react";
import styled from "styled-components";

const FileUpload = ({ ...props }) => {
  return (
    <Container>
      <Input type="file" name="file" onChange={props.onChange} id={props.id} />
      <Label
        htmlFor={props.id}
        imgUrl={props.imgUrl}
        width={props.width}
        height={props.height}
      />
      <Button onClick={props.onClick}>프로필 사진 등록</Button>
    </Container>
  );
};

export default FileUpload;

const Container = styled.div``;

const Input = styled.input`
  width: 100%;
  display: none;
`;

const Label = styled.label`
display: inline-block;
width: 100%;
  ::before {
    content: "";
    display: inline-block;
    background: url(${props => props.imgUrl || ""}) no-repeat scroll center
    center / 100% auto rgba(0, 0, 0, 0);
    width: ${props => props.width || "20px"}
    height: ${props => props.height || "20px"}
    margin: 0 auto;
    border-radius: 50%;
    border: 1px solid #efefef;
    cursor: pointer;
  }
  
`;

const Button = styled.button`
  border: none;
  display: block;
  font-size: 13px;
  text-decoration: underline;
  text-align: center;
  margin-top: 30px;
  cursor: pointer;
`;
