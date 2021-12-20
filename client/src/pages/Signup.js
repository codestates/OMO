import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import './Mainpage.js';
import kakaologin from '../asset/images/kakao_login_medium_wide.png';
import { Button, LoginThemeBtn, SocialLoginBtn } from '../components/Button';
import { Errormessage } from '../components/Message';
import {
  ModalBackground,
  SignupContainer,
  CloseButton,
  SignupTitle,
  InputContainer,
  InputId,
  InputUsername,
  InputPW,
  SocialLoginContainer,
  LinkToLogin
} from '../components/Signupinput';

axios.defaults.withCredentials = true;

export default function Signup ({ modalHandleSignup }) {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({ //! signup 회원가입 요소 확인하기!
    userId: '',
    username: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const isValidId = /^[a-zA-Z0-9_-]{4,20}$/; // 소문자 + 숫자 + 언더바/하이픈 허용 4~20자리
  const isValidPassword = /(?=.*\d)(?=.*[a-zA-ZS]).{8,}/; // 문자, 숫자 1개이상 포함, 8자리 이상

  const handleInputUsername = (e) => {
    const { userId, username, password } = userInfo;
    setErrorMessage('');
    setUserInfo({
      username: e.target.value,
      userId,
      password
    });
  };

  const handleInputIdValue = (e) => {
    const { userId, username, password } = userInfo;
    if (e.target.value.length > 0 && isValidId.test(e.target.value) === false) {
      setErrorMessage('4~20자리의 소문자+숫자 조합으로 만들어주세요(언더바/하이픈 가능)');
    } else {
      setErrorMessage('');
      setUserInfo({
        username,
        userId: e.target.value,
        password
      });
    }
  };

  const handleInputPWValue = (e) => {
    const { userId, username, password } = userInfo;
    if (e.target.value.length > 0 && isValidPassword.test(e.target.value) === false) {
      setErrorMessage('8자리 이상의 문자+숫자 조합으로 만들어주세요');
    } else {
      setErrorMessage('');
      setUserInfo({
        username,
        userId,
        password: e.target.value
      });
    }
  };

  const handleSignup = (e) => {
    const { userId, password, username } = userInfo;
    console.log(userInfo);
    setUserInfo({
      userId,
      password,
      username
    });

    axios
      .post(
        'http://localhost:4000/user/signup',
        {
          userId,
          password,
          username
        },
        {
          headers: { 'Contnet-Type': 'application/json' }
        }
      )
      .then((res) => {
        history.push('/mainpage/todolist'); // 회원가입 요청 후 mainpage로 이동
      })
      .catch((e) => console.log(e));
  };

  //* 가입하기 버튼 props.theme로 위치 수정하기 (center)

  return (
    <div>
      <ModalBackground>
        <SignupContainer>
          <SignupTitle>회원가입</SignupTitle>
          <InputContainer>
            <InputUsername onChange={handleInputUsername} />
            <InputId onChange={handleInputIdValue} />
            <InputPW onChange={handleInputPWValue} />
          {/* 필수 항목이 빠진 경우, 에러 메시지 */}
          <Errormessage>{errorMessage}</Errormessage>
          <LoginThemeBtn onClick={handleSignup}>
            가입하기
          </LoginThemeBtn>
          </InputContainer>
          {/* 소셜 로그인 버튼 */}
          <SocialLoginContainer>
            <img src={kakaologin} width='60%' />
          </SocialLoginContainer>
          {/* 아이디가 있으면 '로그인' 페이지로 이동 */}
          <LinkToLogin>
            아이디가 있으신가요?
            <Link to='./login'>로그인</Link>
          </LinkToLogin>
        </SignupContainer>
      </ModalBackground>
    </div>
  );
}
