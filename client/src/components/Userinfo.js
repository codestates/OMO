import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

export const UserInfoContainer = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
`;

export const UserInfoTitle = styled.div`
  color: #4D94E6;
  font-family: monospace;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 1rem;
`;

export const ViewUserId = styled.div`
  margin: 10px;
  padding: 10px;
  border : 1px solid #E6E6E6;
`;

export const ViewUserName = styled.div`
  margin: 10px;
  padding: 10px;
  border : 1px solid #E6E6E6;
`;


export const ViewJoinDate = styled.div`
  text-align: center;
`;

const HeaderImg = styled.img.attrs({
  src: `https://image.flaticon.com/icons/png/512/25/25231.png`
})`
/* border : 1px solid #E6E6E6; */
width: 50%;
display:block; 
margin:auto;
`

export const Userinfo = ({ viewUserInfo }) => {
  const getJoinDate = () => {
    const startDay = new Date(viewUserInfo.createAt);
    const toDay = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);
    const btDay = toDay - startDay;
    return btDay / (1000 * 60 * 60 * 24);
  };
  console.log(viewUserInfo)

  return (
    <UserInfoContainer>
      <UserInfoTitle>회원 정보</UserInfoTitle>
      <HeaderImg></HeaderImg>
      <ViewUserId>{viewUserInfo.userId}</ViewUserId>
      <ViewUserName>{viewUserInfo.userName}</ViewUserName>
      <ViewJoinDate>지금까지 OMO와 <font size='4' color='#2D9BF0'>{getJoinDate}</font>일 동안 함께 하셨습니다.</ViewJoinDate>
    </UserInfoContainer>
  );
};
