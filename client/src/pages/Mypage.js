import React, { useState } from 'react';
import axios from 'axios';
import { Button, SignOutBtn } from '../components/Button';
import { Userinfo } from '../components/Userinfo';
import { UserInfoModifyModal, SignOutModal } from '../components/Modal';

axios.defaults.withCredentials = true;

export default function Mypage ({ userInfo }) {
  const [isSignOutModal, setIsSignOutModal] = useState('false');
  const [modifyUserInfoModal, setModifyUserInfoModal] = useState(false);
  const [viewUserInfo, setViewUserInfo] = useState({
    userId: userInfo.userId,
    userName: userInfo.userName,
    createAt: userInfo.createAt
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
    axios.put('http://localhost:4000/myinfo/{:userId}', {
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
    axios.delete('http://localhost:4000/user/{:userId}')
      .then((data) => {
        console.log('회원 탈퇴 처리 되었습니다');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div>회원 정보</div>
      <Userinfo viewUserInfo={viewUserInfo} />      
      {modifyUserInfoModal ? <UserInfoModifyModal modifyUserInfoReqHandler={modifyUserInfoReqHandler} modifyUserInfoModalHandler={modifyUserInfoModalHandler}/> : null}
      {isSignOutModal ? <SignOutModal/> : null}
      <Button onClick={modifyUserInfoModalHandler}>회원 정보 수정</Button>
      <SignOutBtn onClick={signOutModalHandler}>회원 탈퇴</SignOutBtn>
    </div>
  );
}
