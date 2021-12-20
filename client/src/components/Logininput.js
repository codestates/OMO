import styled from 'styled-components';

// 모달: 배경
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

// 모달: Login Container
export const LoginContainer = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
`;

// Login: 닫기
export const CloseButton = styled.div`
  float: right;
  font-size: 25px;
`;

// Login: input Container
export const InputContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* border: 1px solid #4D94E6; */
`;

// Login: title
export const LoginTitle = styled.div`
  color: #4D94E6;
  font-family: monospace;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 1rem;
`;

// Login input: ID
export const InputId = styled.input.attrs({
  placeholder: "ID",
  type: "text"
})`
  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;

// Login input: Password
export const InputPW = styled.input.attrs({
  placeholder: "Password",
  type: "password"
})`

  margin-top: 10px;
  border-radius: 2px;
  width: 60%;
  height: 40px;
  border: 1px solid #e5e5e5;
  padding: 9px 12px;
  outline: none;
  box-sizing: border-box;
`;