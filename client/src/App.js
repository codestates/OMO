import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import axios from 'axios';
import KakaoLogin from './pages/KakaoLogin';

export default function App () {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    userId: '',
    id: ''
  });
  const history = useHistory();


  // const isAuthenticated = () => {
  //   axios.post('http://localhost:4000/auth') // 엔드포인트 수정 필요
  //     .then((res) => {
  //       setUserInfo(res); // data 유형 확인 후 수정
  //       setIsLogin(true);
  //       history.push('/');
  //     });
  // };
  // const handleResponseSuccess = () => {
  //   isAuthenticated();
  // };
  const handleLogin = () => {
    setIsLogin(true);
  };
  const handleLogout = () => {
    // console.log('로그아웃 실행됨', isLogin)
    return setIsLogin(false)
  }
  // console.log('요거는 처음에 나오는 거', isLogin)
  
  // useEffect(() => {
  //   isAuthenticated();
  // }, []);


  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            // isLogin={isLogin}
            handleLogin={handleLogin}

            LoginUserInfo={setUserInfo}

            // handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/mainpage'>
          <Mainpage userInfo={userInfo} handleLogout={handleLogout}/>
        </Route>
        <Route path='/kakaoLogin'>
          <KakaoLogin />
        </Route>
        <Route path='/'>
          {/* props 전달 되는지 확인 필요 */}
          {isLogin
            ? <Redirect to={{
              pathname: '/mainpage',
              state: { from: userInfo }
            }}
              />
            : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}
