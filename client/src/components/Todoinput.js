import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Selectcolor } from '../components/Selectcolor';

axios.defaults.withCredentials = true;

export const TagsInput = styled.div`

  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  height: 20px;
  width: 500px;
  padding: 0 8px;
  > ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 8px 0 0 0;
    > .tag {
      width: auto;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #50BEE6;
      padding: 0 8px;
      font-size: 14px;
      list-style: none;
      margin: 0 8px 8px 0;
    }
  }
  > input {
    flex: 1;
    border: none;
    height: 46px;
    font-size: 14px;
    padding: 4px 0 0 0;
    :focus {
      outline: transparent;
    }
  }
  &:focus-within {
    border: 1px solid #4000c7;
  }
`;

// todo input 컨테이너 (전체 컨테이너)
export const TodoInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70rem;
  height: 200px;
  border: 1px solid grey;
`;

// add input 구역 컨테이너
export const AddInputContainer = styled.div`
  display: flex;
  justify-items: row;
  height: 50%;
  background-color: lemonchiffon;
  position: relative;
  box-sizing: border-box;
  /* margin: 50px auto; */
  padding: 20px;
  background: #fff;
`;

// add tags 구역 컨테이너
export const AddTagsContainer = styled.div`
  display: flex;
  justify-items: row;
  height: 50%;
  background-color: lemonchiffon;
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
`;

export const AddTodoInput = styled.input.attrs(props => ({
  type: 'text',
  placeholder: ' + Add Todo'
}))`
background: #ffffff;
border-radius: 5px;
border: 1px solid #e5e5e5;
width: 65%;
height: 30px;
margin: 5px;
padding: 9px;

transition: all 0.1s ease-in-out;
&:hover {
  background: #E3E3E3;
}
`;
export const AddButton = styled.button`
  background: #4D94E6;
  border: none;
  color: white;
  width: 10%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: 5px;
  padding: 25px;
  border-radius: 5px;
`;

export const Calender = styled.input.attrs(props => ({
  type: 'date'
}))`
margin: 5px;

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
  const [tags, setTags] = useState([]);

  const addTags = (event) => {
    const filtered = tags.filter((el) => el === event.target.value);
    if (event.target.value !== '' && filtered.length === 0) {
      setTags([...tags, event.target.value]);
      event.target.value = '';
    }
  }

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
          setTags([])
          setTodolist({
            content: '',
            endtime,
            color,
            tag: []
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <TodoInputContainer>
      <AddInputContainer>
        <AddTodoInput onKeyPress={keyPressEnter} onChange={contentInputHandler} value={todolist.content} />
        <AddButton onClick={btnClickEventHandler}>Add</AddButton>
        <Selectcolor />
        <Calender value={todolist.endtime} onChange={endtimeInputHandler} />
        </AddInputContainer>
      <AddTagsContainer>
        <TagsInput>
          <ul id='tags'>
            {tags.map((tag, index) => (
              <li key={index} className='tag'>
                <span className='tag-title'>{tag}</span>
              </li>
            ))}
          </ul>
          <input className='tag-input' type='text' onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)} placeholder=' add tags' />
        </TagsInput>
      </AddTagsContainer>
      </TodoInputContainer>
  );
}
