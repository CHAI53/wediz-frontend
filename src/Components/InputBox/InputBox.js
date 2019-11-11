import React from "react";
import "./InputBox.scss";

const InputBox = props => {
  return (
    <div className="input_box">
      <input placeholder={props.placeholder}></input>
    </div>
  );
};

export default InputBox;
