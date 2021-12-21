import Axios from 'axios';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';

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
  checked: false
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
export const CheckTodoListIsChecked = styled.divinput.attrs({
  checked: true
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

export function Todolist () {
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (e) => {
    setIsChecked(!isChecked);
    getTodolistData();
    console.log(isChecked);
    // 만약 안되면 setIsChecked(e.target.checked)로 고쳐볼 것
  };
  const checkedTodoList = [];
  const unCheckedTodoList = [];

  Axios.get('http://localhost:4000/todo/{:userId}')
    .then((data) => {
      console.log(data);
      // 받아오는 data 확인 필요
      for (let i = 0; i < data.data.length; i++) {
        if (data.data[i].checkbox === false) {
          checkedTodoList.push(data.data[i]);
        } else {
          unCheckedTodoList.push(data.data[i]);
        }
      }
    })
    .catch((err) => {
      console.log(err);
    });

  return (
    <TodoListContainer>
      {checkedTodoList.map((el) => {
        return (
          <UnCheckTodoListContainer>
            <ThemeProvider theme={el.color}>
              <UncheckTodoListContent>{el.content}</UncheckTodoListContent>
            </ThemeProvider>
            <UncheckTodoListIsChecked checked={isChecked} onChange={checkedItemHandler} />
            <UncheckTodoListEndtime>{el.endtime}</UncheckTodoListEndtime>
            {el.tags.map((tags) => {
              return <UncheckTodoListTags>{tags}</UncheckTodoListTags>;
            })}
          </UnCheckTodoListContainer>
        );
      })}
      {unCheckedTodoList.map((el) => {
        return (
          <CheckTodoListContainer>
            <ThemeProvider theme={el.color}>
              <CheckTodoListContent>{el.content}</CheckTodoListContent>
            </ThemeProvider>
            <CheckTodoListIsChecked checked={isChecked} onChange={checkedItemHandler} />
            <CheckTodoListEndtime>{el.endtime}</CheckTodoListEndtime>
            {el.tags.map((tags) => {
              return <CheckTodoListTags>{tags}</CheckTodoListTags>;
            })}
          </CheckTodoListContainer>
        );
      })}
    </TodoListContainer>
  );
}
