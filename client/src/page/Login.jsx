import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import logo from "../assets/logo.png"

function Login() {
  return (
    <StLayout>
      <StLoginBox>
        <Stlogo src={logo} alt="logo"/>
        <StInputbox>
          <Input placeholder = {"아이디를 입력해주세요"} size = "large"/>
          <Input placeholder = {"비밀번호를 입력해주세요"} size = "large"/>
        </StInputbox>
        <StButtonbox>
          <Button size = "large">회원가입</Button>
          <Button size = "large">로그인</Button>
        </StButtonbox>
      </StLoginBox>
    </StLayout>
  );
}

export default Login;
const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StLoginBox = styled.div`
  width: 640px;
  height: 640px;
  display: flex;
  
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  border-radius: 18px;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
`;
const StInputbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 38px;
  transform: translateY(-50px);
`;

const StButtonbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 19px;
  transform: translateY(-50px);

`

const Stlogo = styled.img`
  transform: scale(40%);
`
