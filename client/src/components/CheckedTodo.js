import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { FaTrashAlt } from 'react-icons/fa';

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

export const CheckTodoListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const CheckTodoListContainer2 = styled.span`
  display: flex;
  flex-direction: row;
`;

export const TodoListContent = styled.span`
margin-right: 10px;
margin-left: 10px;
background-color: whitesmoke;
height: 30px;
width: 40rem;
font-size: 20px;
border: 1px solid ${props => props.theme.main};
border-left: 4px solid ${props => props.theme.main};
`;

TodoListContent.defaultProps = {
  theme: {
    main: '#1A1A1A'
  }
};

export const TodoListIsChecked = styled.input.attrs({
  type: 'checkbox',
})`
  position: relative;
  top: 6px;
`;  
export const TodoListTags = styled.span`
  position: relative;
  left: 35px;
  top: -5px;
  font-size: 10px;
`;


export default function UncheckedTodo ({dummy, isChecked}) {
  const [isCheckedFalse, setIsCheckedFalse] = useState(dummy.checkbox);

  const checkedTrueItemHandler = () => {
    isChecked(dummy.id)
      setIsCheckedFalse(dummy.checkbox)
    }

  return (
  <CheckTodoListContainer>
    <CheckTodoListContainer2>
      <TodoListIsChecked checked={isCheckedFalse} onChange={checkedTrueItemHandler}/>
      <ThemeProvider theme={red}>
        <TodoListContent>{dummy.content}</TodoListContent>
      </ThemeProvider>
      <FaTrashAlt />
    </CheckTodoListContainer2>
    <div>
      {dummy.tags.map((tags) => {
        return <TodoListTags>{tags}</TodoListTags>;
      })}
    </div>
  </CheckTodoListContainer>
  )
}