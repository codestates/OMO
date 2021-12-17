import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BsTrophyFill } from 'react-icons/bs';
import { ImList } from 'react-icons/im';
import { GrLogout } from 'react-icons/gr';

const Navbar = () => {
  function buttonClickHandler () {

  }

  return (
    // https://react-icons.github.io/react-icons 참고
    <div className='navbar'>
      <Link to='/mainpage'>
        <ImList className='icon' />
      </Link>
      <Link to='/achievement'>
        <BsTrophyFill className='icon' />
      </Link>
      <Link to='/mypage'>
        <FaUserCircle className='icon' />
      </Link>
      <div className='logouticon'>
        <GrLogout className='logout' />
      </div>
    </div>

  );
};

export default Navbar;
