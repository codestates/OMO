import React from "react";
import styled, { ThemeProvider } from "styled-components";

export const ButtonContainer = styled.div`
  margin: 0px;
  boader: 1 solid grey;
`

export const Button = styled.button`
width:  ${props => props.theme.width} || 80px;
height:  ${props => props.theme.height} || 30px;
margin: 0px;
border-style: none;
border-radius: 10px;
font-size: 14px;
background: #2D9BF0;
color: #ffffff;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
transition: all 0.1s ease-in-out;
cursor: pointer;
text-align: center;
outline: none;
white-space: nowrap;
overflow: hidden;
&:hover {
  color: #ffffff;
}
&:active {
  background: #2683C9;
}
`
export const SignOutBtn = styled.button`
width:  ${props => props.theme.width} || 80px;
height:  ${props => props.theme.height} || 30px;
margin: 0px;
border-style: none;
border-radius: 10px;
font-size: 14px;
background: #D9D9D9;
color: #ffffff;
font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
transition: all 0.1s ease-in-out;
cursor: pointer;
text-align: center;
outline: none;
white-space: nowrap;
overflow: hidden;
&:hover {
  color: #ffffff;
}
&:active {
  background: #B5B5B5;
}
`
Button.defaultProps = {
  theme: {
    width: "80px",
    height: "30px"
  }
}
SignOutBtn.defaultProps = {
  theme: {
    width: "80px",
    height: "30px"
  }
}

const theme = {
  width: "100px",
  height: "30px"
};
export const UserInfoModify = () => {

  return (
    <ThemeProvider theme={theme}>
      <Button >회원 정보 수정</Button>
      <SignOutBtn>회원 탈퇴</SignOutBtn>
    </ThemeProvider>
  )
}

export const ExButton = () => {

  return (
    <div>
      <Button>로그인</Button>
      <SignOutBtn>로그아웃</SignOutBtn>
    </div>
  )
}
