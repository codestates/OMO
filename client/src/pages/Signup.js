import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;


export default function Signup () {
  return (
  // const isValidId = /^[a-zA-Z0-9_-]{4,20}$/;  // 소문자 + 숫자 + 언더바/하이픈 허용 4~20자리
  // const isValidPassword = /(?=.*[a-zA-ZS])(?=.*?[#?!@$%^&*-]).{6,24}/; // 문자와 특수문자 조합의 6~24 자리

  // if (isValidId) {
  //   setErrorMessage('올바른 아이디 형식이 아닙니다')
  // }
  // if (isValidPassword) {
  //   setErrorMessage('올바른 비밀번호 형식이 아닙니다')
  // }

    <div>Signup</div>

  );
}
