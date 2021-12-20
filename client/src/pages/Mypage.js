import React, { useState } from 'react';
import axios from 'axios';
import { UserInfoModify } from '../components/Button';

axios.defaults.withCredentials = true;

export default function Mypage ({ userInfo }) {
  const [isSignOutModal, setIsSignOutModal] = useState('false');

  const signOutHandler = () => {
    setIsSignOutModal(!isSignOutModal);
  };
  return (
    <div>
      <div>Mypage</div>
      {/* 지금까지 OMO와 {userInfo.createAt}일간 함께 하셨습니다 */}
      <UserInfoModify />
      <center />
    </div>
  );
}
