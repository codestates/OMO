import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Mainpage.js';
import './KakaoLogin';
import { Button, LoginThemeBtn, SocialLoginBtn } from '../components/Button';
import { SocialLoginContainer } from '../components/Signupinput';
import { Message, Errormessage } from '../components/Message';

import kakaologin from '../asset/images/kakao_login_medium_wide.png';
import { 
  ModalBackground,
  LoginContainer,
  InputContainer,
  LoginTitle,
  InputId,
  InputPW,
} from '../components/Logininput';

axios.defaults.withCredentials = true;

export default function Login ({ isLogin, handleLogin,  LoginUserInfo }) {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    password: '',
    id: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메세지 전달

  const handleInputId = (e) => {
    const { userId, password } = userInfo;

    setUserInfo({
      userId: e.target.value,
      password,
    });
  };

  const handleInputPW = (e) => {
    const { userId, password } = userInfo;
    setUserInfo({
      userId,
      password: e.target.value,
    });
  };

  const getLoginUserInfo = () => {
    const { userId, password } = userInfo;
    if (userId === '' || password === '') {
      setErrorMessage('이메일과 비밀번호를 확인하세요'); // 에러 상태 함수
      return;
    }

    axios
    .post(
      'http://localhost:4000/user/login',
      {
        userId,
        password
      },
      {
        headers: { 'Content-Type': 'application/json' }
      }
    )
      .then((res) => {
        LoginUserInfo({
          id: res.data.data.id,
          userId: res.data.data.userId,
          userName: res.data.data.username
        })
        console.log('로그인 요청 성공했음')
        handleLogin();

        // handleResponseSuccess();
        history.push('/mainpage/todolist');
      })
      .catch((e) => console.log(e));
  };

  const kakaoLoginHandler = () => {
    const kakaoLoginUrl = process.env.REACT_APP_KAKAO_LOGIN_URI;
    window.location.assign(kakaoLoginUrl);
  };

  return (
    <div>
      <ModalBackground>
        <LoginContainer>
          <LoginTitle>OMO 로그인</LoginTitle>
          <InputContainer>
            <InputId onChange={handleInputId}></InputId>
            <InputPW onChange={handleInputPW}></InputPW>
            <Errormessage>{errorMessage}</Errormessage>
            <LoginThemeBtn onClick={getLoginUserInfo}>
              로그인{console.log('로그인 버튼 클릭')}
            </LoginThemeBtn>
          <SocialLoginContainer>
            {/* <SocialLoginBtn onClick={kakaoLoginHandler}> */}
            <img src={kakaologin} width='67%' onClick={kakaoLoginHandler} />
            {/* </SocialLoginBtn> */}
          </SocialLoginContainer>
            <Message>아직 아이디가 없으신가요? 👇</Message>
            <LoginThemeBtn>
              <Link to='./signup' style={{ color: 'inherit', textDecoration: 'none' }}>회원가입</Link>
              </LoginThemeBtn>
          </InputContainer>
        </LoginContainer>
      </ModalBackground>
    </div>
  );
}