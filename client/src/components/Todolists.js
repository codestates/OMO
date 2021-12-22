import Axios from 'axios';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dummyTodoLists } from './Dummytodolists'
import UncheckedTodo from './CheckedTodo';

// 전체 TodoList 컨테이너 div
export const TodoListContainer = styled.div`

`;


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

export function Todolists ({ userInfo }) {

  const isChecked = (argu) => {
    for(let n = 0; n < dummyTodoLists.data.length; n++ ) {
      if(dummyTodoLists.data[n]["id"] === argu) {
        dummyTodoLists.data[n]["checkbox"] = !dummyTodoLists.data[n]["checkbox"]
      }
    }

  }
  return (
    <TodoListContainer>
      {dummyTodoLists.data.map((dummy) => {
        return (
          <UncheckedTodo dummy={dummy} isChecked={isChecked}/>
      )})}
    </TodoListContainer>
  );
}
