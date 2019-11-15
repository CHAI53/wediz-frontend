import React from "react";
import styled from "styled-components";
import BigLoginButton from "Components/BigLoginButton";

const LogoButton = styled(BigLoginButton)`
padding: ${props => props.padding || 0}
vertical-align: middle;

`;

const BeforeText = styled.span`
::before {
    content: "";
    display: inline-block;
    color: #fff;
    margin-right: 10px;
    position: relative;
    top: -2px;
    vertical-align: middle;
    background: url(${props => props.imgUrl || ""}) no-repeat scroll center
    center / 100% auto rgba(0, 0, 0, 0);
    width: ${props => props.width || "20px"}
    height: ${props => props.height || "20px"}
  }
`;

const ButtonWithLogo = ({ children, ...props }) => {
  return (
    <LogoButton {...props}>
      <BeforeText {...props}>{children}</BeforeText>
    </LogoButton>
  );
};

export default ButtonWithLogo;
