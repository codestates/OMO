import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Selectcolor } from "../components/Selectcolor";

axios.defaults.withCredentials = true;

export const TodoInputContainer = styled.div`
  display:flex;
  justify-items: row;
`
export const TodoInputt = styled.input.attrs(props => ({
  type: "text",
  size: props.size || "1em",
  placeholder: " + Add Todo"
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
`
export const PlusBTN = styled.button`
background: #2D9BF0;
border-style: none;
height: 30px;
width: 30px;
`
export function Todoinput ({ userInfo }) {
  const [todoValue, setTodoValue] = useState('')

  //엔터키 눌렀을 때 발생하는 이벤트(인데 외 않됢? 빡치게)
  const keyPressHandler = (e) => {
    setTodoValue(e.target.value)
    console.log(todoValue)
  }
  const keyPressEnter = (e) => {
    if (e.key === 'Enter'){
      btnClickEventHandler()
    } 
  }

  const btnClickEventHandler = () => {
    console.log('버튼클릭')
    setTodoValue('')
     // axios 요청 후에 todoinput value 초기화
    if (todoValue.length === 0) {
      return
    }     
    // else if (todoValue.length !== 0) {
    //   axios.post('http://localhost:4000/todo/{:userId}', {
    //     "data" : {
    //         "content" : userInfo.todolist.content,
    //         "endtime" : userInfo.todolist.endtime,
    //         "color" : userInfo.todolist.color,
    //         "tag" :  userInfo.todolist.tag
    //     }
    //   },
    //   {
    //     headers: {'Contnet-Type': 'application/json'},
    //   }
    //   )
    // }
  }

  return (
    <TodoInputContainer>
      <TodoInputt onKeyPress={keyPressEnter} onChange={keyPressHandler} value={todoValue}></TodoInputt>
      <PlusBTN onClick={btnClickEventHandler} >Add</PlusBTN>
      <Selectcolor />
    </TodoInputContainer>
  )
}
