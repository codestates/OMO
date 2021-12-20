import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

export const ButtonContainer = styled.div`
  margin: 0px;
  border: 1 solid grey;
`;

export const Button = styled.button`
width: 80px;
height: 30px;
margin: 0px;
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
width: 80px;
height: 30px;
margin: 0px;
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
`;

export const SocialLoginBtn = styled.button`
  border-color: #feec34;
  background: #feec34;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 10px;
  border-radius: 3px;
`;