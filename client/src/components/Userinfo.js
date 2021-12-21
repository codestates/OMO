import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

export const UserInfoContainer = styled.div`

`;
export const UserInfoTitle = styled.div`

`;

export const ViewUserName = styled.div`

`;
export const ViewUserId = styled.div`

`;
export const ViewJoinDate = styled.div`

`;

export const Userinfo = ({ viewUserInfo }) => {
  const getJoinDate = () => {
    const startDay = new Date(viewUserInfo.createAt);
    const toDay = new Date(`${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`);
    const btDay = toDay - startDay;
    return btDay / (1000 * 60 * 60 * 24);
  };

  return (
    <UserInfoContainer>
      <UserInfoTitle>회원 정보</UserInfoTitle>
      <ViewUserId>{viewUserInfo.userId}</ViewUserId>
      <ViewUserName>{viewUserInfo.userName}</ViewUserName>
      <ViewJoinDate>지금까지 OMO와 <font size='4' color='#2D9BF0'>{getJoinDate}</font>일 동안 함께 하셨습니다.</ViewJoinDate>
    </UserInfoContainer>
  );
};
