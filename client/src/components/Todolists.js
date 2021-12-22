import Axios from 'axios';
import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { dummyTodoLists } from './Dummytodolists'
import { FaTrashAlt } from 'react-icons/fa';

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
  const [isCheckedFalse, setIsCheckedFalse] = useState(false);
  const [isCheckedTrue, setIsCheckedTrue] = useState(true);


  const checkedTrueItemHandler = (e) => {
    setIsCheckedTrue(!isCheckedTrue)
  }
  const checkedFalseItemHandler = (e) => {
    setIsCheckedFalse(!isCheckedFalse);
    // 만약 안되면 setIsChecked(e.target.checked)로 고쳐볼 것
  };
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

  
  for (let i = 0; i < dummyTodoLists.data.length; i++) {
    console.log(i)
    if (dummyTodoLists.data[i].checkbox) {
      checkedTodoList.push(dummyTodoLists.data[i]);
    } else {
      unCheckedTodoList.push(dummyTodoLists.data[i]);
    }
  }
  console.log(checkedTodoList,checkedTodoList)

  return (
    <TodoListContainer>
      {unCheckedTodoList.map((el) => {
        return (
          <UnCheckTodoListContainer>
            <ThemeProvider theme={red}>
              <UncheckTodoListContent>{el.content}</UncheckTodoListContent>
            </ThemeProvider>
            <UncheckTodoListIsChecked checked={isCheckedFalse} onChange={checkedFalseItemHandler} />
            <span>
              <UncheckTodoListEndtime>{el.endtime}</UncheckTodoListEndtime>
              {el.tags.map((tags) => {
                return <UncheckTodoListTags>{tags}</UncheckTodoListTags>;
              })}
              <FaTrashAlt/>
            </span>
            
          </UnCheckTodoListContainer>
        );
      })}
      {checkedTodoList.map((el) => {
        return (
          <CheckTodoListContainer>
            <ThemeProvider theme={blue}>
              <CheckTodoListContent>{el.content}</CheckTodoListContent>
            </ThemeProvider>
            <CheckTodoListIsChecked checked={isCheckedTrue} onChange={checkedTrueItemHandler} />
            <span>
              <CheckTodoListEndtime>{el.endtime}</CheckTodoListEndtime>
              {el.tags.map((tags) => {
                return <CheckTodoListTags>{tags}</CheckTodoListTags>;
              })}
              <FaTrashAlt/>
            </span>
          </CheckTodoListContainer>
        );
      })}
    </TodoListContainer>
  );
}
