import Axios from 'axios';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dummyTodoLists } from './Dummytodolists'
import { FaTrashAlt } from 'react-icons/fa';
import UncheckedTodo from './uncheckedTodo';

// 전체 TodoList 컨테이너 div
export const TodoListContainer = styled.div`

`;

// Check 되지 않은 TodoList 목록
export const UnCheckTodoListContainer = styled.ul`

`;
export const UncheckTodoListContent = styled.div`
background-color: whitesmoke;
border: 1px solid ${props => props.theme.main};
border-left: 4px solid ${props => props.theme.main};
`;

export const UncheckTodoListIsChecked = styled.input.attrs({
  type: 'checkbox',
})`

`;
export const UncheckTodoListEndtime = styled.div`

`;

export const UncheckTodoListTags = styled.div`

`;
// Check 된 TodoList 목록
export const CheckTodoListContainer = styled.ul`

`;

export const CheckTodoListContent = styled.div`
background-color: whitesmoke;
border: 1px solid ${props => props.theme.main};
border-left: 4px solid ${props => props.theme.main};
`;
export const CheckTodoListIsChecked = styled.input.attrs({
  type: 'checkbox',
})`

`;
export const CheckTodoListEndtime = styled.div`

`;
export const CheckTodoListTags = styled.div`

`;

CheckTodoListContent.defaultProps = {
  theme: {
    main: '#1A1A1A'
  }
};
UncheckTodoListContent.defaultProps = {
  theme: {
    main: '#1A1A1A'
  }
};

// 색깔 지정방식을 뒤집어서 적용해야함
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

export function Todolists ({userInfo}) {
  const checkedHandler = (e) => {
    if (e.target.checked) {
      console.log('check true')
      e.target.checked = false
    }
    else {
      console.log('check false')
      e.target.checked = true
    }
  }

  // Axios.get(`http://localhost:4000/todo/${userInfo.id}`)
  //   .then((data) => {
  //     console.log(data);
  //     // 받아오는 data 확인 필요
  //     for (let i = 0; i < data.data.length; i++) {
  //       if (data.data[i].checkbox === false) {
  //         checkedTodoList.push(data.data[i]);
  //       } else {
  //         unCheckedTodoList.push(data.data[i]);
  //       }
  //     }
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
  
  const checkedTodoList = [];
  const unCheckedTodoList = [];



  const isChecked = (argu) => {
    for(let n = 0; n < dummyTodoLists.data.length; n++ ) {
      if(dummyTodoLists.data[n]["id"] === argu) {
        dummyTodoLists.data[n]["checkbox"] = !dummyTodoLists.data[n]["checkbox"]
      }
    }
    // console.log(dummyTodoLists)
    // e.target.checked = !e.target.checked
  }

  
  // for (let i = 0; i < dummyTodoLists.data.length; i++) {
  //   if (dummyTodoLists.data[i].checkbox) {
  //     checkedTodoList.push(dummyTodoLists.data[i]);
  //   } else {
  //     unCheckedTodoList.push(dummyTodoLists.data[i]);
  //   }
  // }

  return (
    <TodoListContainer>
      {dummyTodoLists.data.map((dummy) => {
        return (
          <UncheckedTodo dummy={dummy} isChecked={isChecked}/>
      )})}
    </TodoListContainer>
  );
}
