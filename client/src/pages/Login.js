import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import '../css/Login.css';
import './Mainpage.js';

axios.defaults.withCredentials = true;

export default function Login ({ isLogin, handleLogin, handleResponseSuccess }) {
  const history = useHistory();
  const [loginInfo, setLoginInfo] = useState({
    id: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState(''); // 에러 메세지 전달

  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };

  const errorModal = () => {};
  const getLoginUserInfo = () => {
    const { id, password } = loginInfo;
    if (id === '' || password === '') {
      setErrorMessage('이메일과 비밀번호를 확인하세요'); // 에러 상태 함수
      return;
    }

    axios
      .post(
        'https://localhost:4000/user/login',
        {
          id,
          password
        },
        {
          headers: { 'Content-Type': 'application/json' }
        }
      )
      .then((res) => {
        handleResponseSuccess();
        handleLogin();
        history.push('/mainpage');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className='login_container'>
        <div className='login_section'>
          <div className='omo_logo'>
          omo logo
          </div>
          <div className='login'>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='id_pw_wrap'>
                <div>
                  <input type='text' placeholder='ID' onChange={handleInputValue('id')} />
                </div>
                <div>
                  <input type='password' placeholder='Password' onChange={handleInputValue('password')} />
                </div>
                <button className='btn_login' onClick={getLoginUserInfo}>
                  Login
                </button>
                {/* 1. 로그인 버튼을 눌렀을 때 유효성 검사 시작
                2. 유효성 검사가 false -> setErrorMessage
                3. 유효성 검사가 true -> server isValid 검사로 input 값과 DB user 정보 일치시 Login */}
              </div>
              <div>아직 아이디가 없으신가요? 👇</div>
              <div>
                <Link to='/Signup'>
                  <button className='btn_signup' type='button'>SignUp</button>
                </Link>
              </div>
              <div>
                <button className='btn_authLogin_kakao' type='button'>kakao</button>
              </div>
              <div className='alert_box'>{errorMessage}</div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
