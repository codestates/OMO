import React from 'react';
import '../css/Navbar.css';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BsTrophyFill } from 'react-icons/bs';
import { ImList } from 'react-icons/im';
import { GrLogout } from 'react-icons/gr';

const Navbar = () => {
  return (
    // https://react-icons.github.io/react-icons 참고
    <section className='navbar'>
      <Link to='/mainpage/todolist'>
        <ImList className='icon' />
      </Link>
      <Link exact to='/mainpage/achievement'>
        <BsTrophyFill className='icon' />
      </Link>
      <Link exact to='/mainpage/mypage'>
        <FaUserCircle className='icon' />
      </Link>
      <div className='logouticon'>
        <GrLogout className='logout' />
      </div>
    </section>
  );
};

export default Navbar;
