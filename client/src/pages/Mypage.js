import React, { useState } from 'react';
import axios from 'axios';
import { Button, SignOutBtn } from '../components/Button';
import { Userinfo } from '../components/Userinfo';
import { UserInfoModifyModal, SignOutModal } from '../components/Modal';
import styled from 'styled-components';

axios.defaults.withCredentials = true;

export const MyPageContainer = styled.div`
  display: flex;
`;




export default function Mypage ({ userInfo }) {
  const [isSignOutModal, setIsSignOutModal] = useState(false);
  const [modifyUserInfoModal, setModifyUserInfoModal] = useState(false);
  const [viewUserInfo, setViewUserInfo] = useState({
    id: userInfo.id,
    userId: userInfo.userId,
    userName: userInfo.userName,
    createdAt: userInfo.createdAt
  });

  const modifyUserInfoModalHandler = () => {
    setModifyUserInfoModal(!modifyUserInfoModal)
  }
  const signOutModalHandler = () => {
    setIsSignOutModal(!isSignOutModal);
  };

  // 회원정보수정 함수
  const modifyUserInfoReqHandler = () => {
    const { username, password } = viewUserInfo;
    { /* inputdata에서 받아서 처리해야함.. 일단 에러나는거 해소용으로 작성함. */ }
    axios.put(`http://localhost:4000/todo/${userInfo.id}`, {
      username,
      password
    },
    {
      headers: { 'Contnet-Type': 'application/json' }
    })
      .then((data) => {
        console.log('회원 정보가 수정되었습니다');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // 회원탈퇴 함수
  const signOutReqHandler = () => {
    console.log(userInfo)
    axios.delete(`http://localhost:4000/todo/${userInfo.id}`)
      .then((data) => {
        console.log('회원 탈퇴 처리 되었습니다');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Userinfo viewUserInfo={viewUserInfo} />      
      {modifyUserInfoModal ? <UserInfoModifyModal modifyUserInfoReqHandler={modifyUserInfoReqHandler} modifyUserInfoModalHandler={modifyUserInfoModalHandler}/> : null}
      {isSignOutModal ? <SignOutModal signOutReqHandler={signOutReqHandler} signOutModalHandler={signOutModalHandler}/> : null}
      <Button onClick={modifyUserInfoModalHandler}>회원 정보 수정</Button>
      <SignOutBtn onClick={signOutModalHandler}>회원 탈퇴</SignOutBtn>
    </div>
  );
}
