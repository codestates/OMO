import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Todolist from './Todolist';
import Mypage from './Mypage';
import Achievement from './Achievement';
import '../css/Mainpage.css';

export default function Mainpage () {
  const [page, setPage] = useState('mainpage');

  function pageHandler () {
  }

  return (
    <div className='page'>
      <div className='mainpage'>
        <div className='navbar'>
          <Navbar />
        </div>
        <div className='content'>
          {true
            ? <Todolist />
            : <Mypage />
          // <Achievement />
          }
        </div>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
}
