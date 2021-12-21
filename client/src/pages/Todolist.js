import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';
import { Selectcolor } from '../components/Selectcolor';
import { Todoinput } from '../components/Todoinput';
import { Tag } from '../components/Tag';
import '../css/Todolist.css';

export default function Todolist () {
  const [startDate, setStartDate] = useState(new Date());

  const createTodo = () => {

  };
  const inputDate = () => {

  };
  // 미처리 문제
  // 1. onKeyPress로 add될 때 tags 상태를 todoinputvalue랑 같이 보내줘야 함
  // 2. date value 받아서 전송해야함

  return (
    <div className='todocontainer'>
      <div className='todoinput'>
        <Todoinput />
        <Tag />
      </div>
      <div className='todolist'>
        {/* <Todolist/> */}
        <FaTrashAlt />
        {/* tag 검색 기능 */}
        <div className='taglist'>#tag</div>
      </div>
    </div>
  );
}
