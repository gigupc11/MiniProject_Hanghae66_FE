import React from "react";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import logo from "../assets/logo.png"
import useInput from "../hooks/useInput";
import axios from 'axios';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserId } from "../redux/modules/authReducer";

function Login() {
  const [userId, handleIdChange, resetId] = useInput('');
  const [userPassword, handlePasswordChange, resetPassword] = useInput('');
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const handleSubmitButtonClick = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`, {
        userId,
        userPassword},
        {withCredentials:true}
      );
      const responseCode = response.data.code

      if (responseCode != "BAD_REQUEST") {
        const rowToken = response.headers['access_key'];
        const rowToken2 = response.headers['refresh_key'];
        const userRole = response.headers['user_role'];
        console.log(rowToken)
        const token = rowToken.split(" ")[1]
        const token2 = rowToken2.split(" ")[1]
        Cookies.set('token', token, { expires: 1 / 24 });
        Cookies.set('token2', token2, { expires: 1 / 24 });

        localStorage.setItem('userRoleLS', userRole)
  
        alert('로그인에 성공했습니다!');
        resetId("")
        resetPassword("")

        dispatch(setUserId(userId));
        navigate(`/`)
        window.location.reload();
      } else {
        alert(response.data.msg);
        console.error(response.data.msg);
      }
    } catch (error) {
      console.error('로그인 오류:', error);
      alert(JSON.stringify(error));
      console.log(userId, userPassword)
    }
  }

  return (
    <StLayout>
      <StLoginBox>
        <Stlogo src={logo} alt="logo" />
        <StInputbox>
          <Input
            value={userId}
            onChange={handleIdChange}
            placeholder={"아이디를 입력해주세요"} size="large" />
          <Input
            value={userPassword}
            onChange={handlePasswordChange}
            placeholder={"비밀번호를 입력해주세요"} type="password" size="large" />
        </StInputbox>
        <StButtonbox>
          <Button size="large" onClick = {()=> {navigate("/signup")}}>회원가입</Button>
          <Button onClick={(event) => { handleSubmitButtonClick(event) }} size="large">로그인</Button>
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
