import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Mainpage.js';
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

export default function Login ({ isLogin, handleLogin, handleResponseSuccess }) {
  const history = useHistory();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메세지 전달

  const handleInputId = (e) => {
    const {userId, password} = userInfo;
    
    setUserInfo({
      userId: e.target.value,
      password
    });
  };

  const handleInputPW = (e) => {
    const {userId, password} = userInfo;
    setUserInfo({
      userId,
      password: e.target.value
    });
  }

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
        handleResponseSuccess();
        getLoginUserInfo();
        history.push('/mainpage/todolist');
      })
      .catch((e) => console.log(e));
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
              로그인
            </LoginThemeBtn>
            <Message>아직 아이디가 없으신가요? 👇</Message>
            <LoginThemeBtn>
              <Link to='./signup'>회원가입</Link>
              </LoginThemeBtn>
          </InputContainer>
          <SocialLoginContainer>
            <img src={kakaologin} width='60%' />
          </SocialLoginContainer>
        </LoginContainer>
      </ModalBackground>
    </div>
  );
};
