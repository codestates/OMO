import React, { useState } from 'react';
import { Link, BrowserRouter, Switch, Route } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import Todolist from './Todolist';
import Mypage from './Mypage';
import Achievement from './Achievement';
import '../css/Mainpage.css';

export default function Mainpage () {
  // const [pageTurning, setPageTurning] = useState('todolist');

  // function pageTurningandler (page) {
  //   setPageTurning(page)
  //   console.log(page)
  // }

  return (
    <div className='page'>
      <BrowserRouter>
        <div className='mainpage'>
          <div className='navbar'>
            <Navbar />
          </div>
          <section className='content'>
            <Switch>
              <Route path='/mainpage/todolist'>
                <Todolist />
              </Route>
              <Route exact path='/mainpage/achievement'>
                <Achievement />
              </Route>
              <Route exact path='/mainpage/mypage'>
                <Mypage />
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
