import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Todolist from './Todolist';
import Mypage from './Mypage';
import Achievement from './Achievement';
import '../css/Mainpage.css';


export default function Mainpage ({ userInfo }) {
  
  return (
    <div className='page'>
      <BrowserRouter>
        <div className='mainpage'>
          <div className='navbar'>
            <Navbar />
          </div>
          <section className='content'>
            <Switch>
              <Route exact path='/mainpage'>
                <Todolist userInfo={userInfo} />
              </Route>
              <Route path='/mainpage/achievement'>
                <Achievement userInfo={userInfo} />
              </Route>
              <Route path='/mainpage/mypage'>
                <Mypage userInfo={userInfo} />
              </Route>
            </Switch>
          </section>
        </div>
        <div className='footer'>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
