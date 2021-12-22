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


export default function UncheckedTodo ({dummy, isChecked}) {
    const [isCheckedFalse, setIsCheckedFalse] = useState(dummy.checkbox);

    const checkedTrueItemHandler = () => {
      isChecked(dummy.id)
        setIsCheckedFalse(dummy.checkbox)
      }

    return (
    <UnCheckTodoListContainer>
      <ThemeProvider theme={red}>
        <UncheckTodoListContent>{dummy.content}</UncheckTodoListContent>
      </ThemeProvider>
      <UncheckTodoListIsChecked checked={isCheckedFalse} onChange={checkedTrueItemHandler}/>
      <span>
        <UncheckTodoListEndtime>{dummy.endtime}</UncheckTodoListEndtime>
        {dummy.tags.map((tags) => {
          return <UncheckTodoListTags>{tags}</UncheckTodoListTags>;
        })}
        <FaTrashAlt/>
      </span>
    </UnCheckTodoListContainer>
    )
}