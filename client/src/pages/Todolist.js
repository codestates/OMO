import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { Selectcolor } from '../components/Selectcolor';
import { Todoinput } from '../components/Todoinput';
import { Todolists } from '../components/Todolists';

import '../css/Todolist.css';

export default function Todolist ({ userInfo }) {

  // 미처리 문제
  // 1. onKeyPress로 add될 때 tags 상태를 todoinputvalue랑 같이 보내줘야 함
  // 2. date value 받아서 전송해야함

  return (
    <div className='todocontainer'>
      <Todoinput userInfo={userInfo}/>
      <Todolists userInfo={userInfo}/>
    </div>
  );
}
