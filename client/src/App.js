import './App.css';
import React, { useEffect, useState } from 'react';
import { Switch, Route, useHistory, Redirect } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Footer from './components/Footer';

export default function App () {
  const [isLogin, setIslogin] = useState(true);

  function buttonClickHandler () {

  }

  return (
    <div>
      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route exact path='/signup'>
          <Signup />
        </Route>
        <Route exact path='/mainpage'>
          <Mainpage />
        </Route>
        <Route path='/'>
          {isLogin ? <Redirect to='/mainpage' /> : <Redirect to='/login' />}
        </Route>
      </Switch>
    </div>
  );
}
