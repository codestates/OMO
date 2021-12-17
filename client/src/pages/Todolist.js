import React, { useState } from 'react';
import { BsPlusLg } from 'react-icons/bs';
import { FaTrashAlt } from 'react-icons/fa';

import '../css/Todolist.css';

export default function Todolist () {
  const createTodo = () => {

  };

  return (
    <div className='todocontainer'>
      <div className='todoinput'>
        <div className='addtodolist'>
          <input type='text' className='todobox' placeholder='To do 를 작성하세요' size='10' />
          <button>+</button>
          <BsPlusLg className='plusicon' />
        </div>
        <div className='todoattribute'>
          <div className='colortag' />
          <input type='date' classname='date' />
          <div class='content'>
            <input type='hidden' value='' name='tag' id='rdTag' />
            <button type='submit'>태그등록</button>
            <ul id='tag-list' />
            <div>
              <input type='text' id='tag' size='7' placeholder='#tag' />
            </div>
          </div>
        </div>
      </div>

      <div className='todolist'>
        <dl>
          <dt>
            <div className='date' />
            <input type='checkbox' />
            <span className='todolistsort'> 여기에 todo 목록 정렬 </span>
            <FaTrashAlt />
            {/* tag 검색 기능 */}
            <div className='taglist'>#tag</div>
          </dt>
        </dl>
      </div>
    </div>
  );
}
