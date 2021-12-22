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

  const handleResponseSuccess = () => {
    // isAuthenticated();
  };
  const handleLogin = () => {
    setIsLogin(true);
  };

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login
            // isLogin={isLogin}
            handleLogin={handleLogin}
            // handleResponseSuccess={handleResponseSuccess}
          />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/mainpage'>
          <Mainpage userInfo={userInfo} />
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
