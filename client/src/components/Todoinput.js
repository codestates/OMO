import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Selectcolor } from '../components/Selectcolor';

axios.defaults.withCredentials = true;

export const TodoInputContainer = styled.div`
  display:flex;
  justify-items: row;
`;
export const TodoInputt = styled.input.attrs(props => ({
  type: 'text',
  size: props.size || '1em',
  placeholder: ' + Add Todo'
}))`
background: #ffffff;
border-radius: 5px;
border-style: none;
margin: ${props => props.size};
padding: ${props => props.size};
width: 20rem;
transition: all 0.1s ease-in-out;
&:hover {
  background: #E3E3E3;
}
`;
export const PlusBTN = styled.button`
background: #2D9BF0;
border-style: none;
height: 30px;
width: 30px;
`;

export const Calender = styled.input.attrs(props => ({
  type: 'date'
}))`
widgh: 3rem;
height: 2rem

`;
const black = {
  main: '#1A1A1A'
};
const red = {
  main: '#DA0063'
};
const yellow = {
  main: '#FAC710'
};
const green = {
  main: '#0CA789'
};
const blue = {
  main: '#2D9BF0'
};
const deepblue = {
  main: '#414BB2'
};

export function Todoinput ({ userInfo }) {
  const [todolist, setTodolist] = useState({
    content: '',
    endtime: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`,
    color: "#1A1A1A",
    tag: []
  });
  const { content, endtime, color, tag } = todolist;
  // 오늘 날짜 찾는 함수는 미작성상태 dateValue 초기값은 일단 '' 처리했음
  const contentInputHandler = (e) => {
    setTodolist({
      content: e.target.value,
      endtime,
      color,
      tag
    });
  };
  const endtimeInputHandler = (e) => {
    setTodolist({
      content,
      endtime: e.target.value,
      color,
      tag
    });
  };
  const keyPressEnter = (e) => {
    if (e.key === 'Enter') {
      btnClickEventHandler();
    }
  };

  const btnClickEventHandler = () => {
    const { content, endtime, color, tag } = todolist;
    console.log('버튼클릭');

    // axios 요청 후에 todoinput value 초기화
    if (todolist.content.length === 0) return;
    else {
      axios.post(`http://localhost:4000/todo/${userInfo.id}`, {
        data: {
          content: content,
          endtime: endtime,
          color: color,
          tag: tag
        }
      },
      // {
      //   headers: { 'Content-Type': 'application/json' }}
        )
        .then((data) => {
          setTodolist({
            content: '',
            endtime,
            color,
            tag
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <TodoInputContainer>
      <TodoInputt onKeyPress={keyPressEnter} onChange={contentInputHandler} value={todolist.content} />
      <PlusBTN onClick={btnClickEventHandler}>Add</PlusBTN>
      <Selectcolor />
      <Calender value={todolist.endtime} onChange={endtimeInputHandler} />
    </TodoInputContainer>
  );
}
