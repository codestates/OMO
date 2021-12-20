import styled, { ThemeProvider } from 'styled-components';

// 모달: 배경
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
`;

// 모달: 회원가입 Container
export const SignupContainer = styled.div`
  width: 480px;
  height: 621px;
  background-color: white;
  position: relative;
  box-sizing: border-box;
  margin: 50px auto;
  padding: 20px;
  background: #fff;
`;

// 회원가입: 닫기
export const CloseButton = styled.div`
  float: right;
  font-size: 25px;
`;

// 회원가입: input Container
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

// 회원가입: title
export const SignupTitle = styled.div`
  color: #4D94E6;
  font-family: monospace;
  font-size: 2rem;
  font-weight: 600;
  text-align: center;
  margin: 1rem;
`;

// 회원가입 input: ID
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

// 회원가입 input: Username
export const InputUsername = styled.input.attrs({
  placeholder: "Username",
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

// 회원가입 input: Password
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

// 소셜 로그인 container
export const SocialLoginContainer = styled.div`
  margin: 10px auto;
  width: 100%;
  position: relative;
  padding: 0 20px 32px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* border: 1px solid #4D94E6; */
`;

// 소셜 로그인 버튼 -> Button Component에 SocialLoginBtn


// 아이디가 있을 경우 로그인 페이지로 이동
export const LinkToLogin = styled.div`
  color: #9e9e9e;
  font-weight: 600;
  font-size: smaller;
  text-align: center;
  margin: 1rem;
`;
