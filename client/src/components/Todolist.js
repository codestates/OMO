import React, { useState } from 'react';
import styled from 'styled-components';

export const TodoListContainer = styled.ul`

`;
export const TodoListLi = styled.li.attrs(props => ({

}))`

`;
export const TodoDate = styled.div`
color: red;
`;
export const TodoChecked = styled.input.attrs(props => ({
  // attrs 메소드를 이용해서 아래와 같이 div 엘리먼트에 속성을 추가할 수 있습니다.
  type: 'checkbox',
  value: 'checked'
}))`

`;

export const TodoList = styled.div`
height: 2rem;
background-color: whitesmoke;
border-radius: 4px;
border: 1px solid ${props => props.theme.main};
border-left: 4px solid ${props => props.theme.main};
`;
TodoList.defaultProps = {
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

export function Todolist ({ userInfo }) {
  const [isChecked, setIsChecked] = useState(false);

  const checkedItemHandler = (e) => {
    setIsChecked(!isChecked);
    // 만약 안되면 setIsChecked(e.target.checked)로 고쳐볼 것
  };

  // return (
  //   <TodoListContainer>
  //     {/* map으로 불러오기 */}
  //     {userInfo.todolist.map((Todolist) => {
  //       <TodoListLi />
  //     })}
  //     <TodoChecked type='checkbox' checked={isChecked} onChange={checkedItemHandler}>{userInfo.checked}</TodoChecked>
  //     <TodoList>`{userInfo.Todolist}`</TodoList>
  //     <TodoDate>{userInfo.tododate}</TodoDate>
  //   </TodoListContainer>
  // )
}
