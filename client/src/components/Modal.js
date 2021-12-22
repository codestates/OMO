import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, SignOutBtn } from './Button';


export const ModalContainer = styled.div`
width: 480px;
height: 621px;
background-color: white;
position: relative;
box-sizing: border-box;
margin: 50px auto;
padding: 20px;
background: #fff;
`
export const ModalBackDrop = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`
export const ModalContent = styled.div`

`
export const ModifyUserName = styled.input.attrs({
  type: 'text',
  placeholder: "Username"
})`
margin-top: 10px;
border-radius: 2px;
width: 60%;
height: 40px;
border: 1px solid #e5e5e5;
padding: 9px 12px;
outline: none;
box-sizing: border-box;
`
export const ModifyUserPassword = styled.input.attrs({
  type: 'password',
  placeholder: "Password"
})`
margin-top: 10px;
border-radius: 2px;
width: 60%;
height: 40px;
border: 1px solid #e5e5e5;
padding: 9px 12px;
outline: none;
box-sizing: border-box;
`
export const ConfirmPassword = styled.input.attrs({
  type: 'password',
  placeholder: "Password check"
})`
margin-top: 10px;
border-radius: 2px;
width: 60%;
height: 40px;
border: 1px solid #e5e5e5;
padding: 9px 12px;
outline: none;
box-sizing: border-box;
`
export const ViewErrorMessage = styled.div`

`
export const SignOutModal = ({signOutReqHandler, signOutModalHandler}) => {
  const [signOut, setSignOut] = useState('')

  return (
    <ModalBackDrop>
      <ModalContainer>
        <Button onClick={signOutReqHandler}/>
        <SignOutBtn onClick={signOutModalHandler}/>
      </ModalContainer>
    </ModalBackDrop>
  )
}



export const UserInfoModifyModal = ({ modifyUserInfoReqHandler, modifyUserInfoModalHandler }) => {
  const [errorMessage, setErrorMessage] = useState('')
  const [modifyPassword, setmodifyPassword] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [modifyName, setModifyName] = useState('')
  
  const modifyUserNameHandler = (e) => {
    setModifyName(e.target.value)
  }

  const handlePWCheck = (e) => {
    setmodifyPassword(e.target.value)
    if (e.target.value === confirmPassword) {
      setErrorMessage('');
    } else {
      setErrorMessage('비밀번호가 일치하지 않습니다');
    }
  };
  const setconfirmPasswordHandler = (e) => {
    setconfirmPassword(e.target.value)
  }

  return (
    <ModalBackDrop> 
      <ModalContainer>
        <ModalContent>
          <ModifyUserName value={modifyName} onChange={modifyUserNameHandler}></ModifyUserName>
          <ModifyUserPassword value={modifyPassword} onChange={handlePWCheck}/>
          <ConfirmPassword value={confirmPassword} onChange={setconfirmPasswordHandler}/>
          <ViewErrorMessage>{errorMessage}</ViewErrorMessage>
          <Button onClick={modifyUserInfoReqHandler}/>
          <SignOutBtn onClick={modifyUserInfoModalHandler}/>
        </ModalContent>
      </ModalContainer>
    </ModalBackDrop>
  )
}