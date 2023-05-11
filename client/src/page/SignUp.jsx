import React, { useState } from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";
import useInput from "../hooks/useInput";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie"
import jwt_decode from 'jwt-decode';

function SignUp() {
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userYear, setUserYear] = useState('');
  const [userSkill, setUserSkill] = useState(''); // 0=spring, 2=react, 3=nodejs
  const [userRole, setUserRole] = useState(''); // admin || user
  const [token, setToken] = useState(' ');
  const [isDuplicateChecked, setIsDuplicateChecked] = useState(false);

  // console.log(userId, userName, userPassword, userYear, userSkill, userRole, token)
  // console.log(userRole)
  // const handleChange = (event) => {
  //   setUserRole(event.target.value);
  // };

  const navigate = useNavigate()

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isDuplicateChecked) {
      alert('중복체크를 해주세요!')
      return
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/signup`, {
        userId,
        userName,
        userPassword,
        userYear,
        userSkill,
        userRole,
        adminToken: token
      }, {
        headers: {
        },
      });


      const responseCode = response.data.code;
      // console.log(responseCode)

      if (responseCode !== 'BAD_REQUEST') {
        alert('회원가입에 성공했습니다!');
        navigate('/login')
        // console.log(userId, userName, userPassword, userYear, userSkill, userRole, token);
      } else {
        alert(response.data.msg);
        console.error('회원가입 오류:', response);
      }
    } catch (error) {
      console.error('회원가입 오류:', error.message);
      alert(JSON.stringify(error.message));
      // console.log(userId, userName, userPassword, userYear, userSkill, userRole);
    }
  }












  const duplicateIdCheck = async (id) => {
    const userId = id
    console.log(userId)
    try {
      const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/auth/userCheck/${userId}`)
      // alert(JSON.stringify(response.data.msg));
      const message = response.data.code;
      if (message !== "BAD_REQUEST") {
        alert(response.data.msg);
        setIsDuplicateChecked(true);
      } else {
        alert(response.data.msg);
        setIsDuplicateChecked(false);
      }
    } catch (error) {
      console.error("오류", error)
      alert(error)
    }
  }

  const handleCheckChange = (event) => {
    if (event.target.checked) {
      setUserRole('admin');
    } else {
      setUserRole('user');
      setToken('');
    }
  };

  const handleTokenChange = (event) => {
    setToken(event.target.value);
  };

  return (
    <StLayout>
      <StsignBox>
        <Stheadtext>회원가입</Stheadtext>
        <StInputbox>
          <StIDtext>아이디</StIDtext>
          <StIdbox>
            <Input value={userId}
              onChange={(e) => setUserId(e.target.value)}
              size="medium" readOnly={isDuplicateChecked} 
              style={{ backgroundColor: isDuplicateChecked ? 'lightgray' : 'white' }}
              placeholder="아이디는 4 ~ 10자 이내로 입력해주세요" />
            <Button onClick={() => duplicateIdCheck(userId)} size="medium">중복체크</Button>
          </StIdbox>
          <StIDtext>닉네임</StIDtext>
          <StIdbox>
            <Input value={userName}
              onChange={(e) => setUserName(e.target.value)}
              size="custom" width="460px" height="46px" fsize="16px" placeholder="닉네임은 10자 이내로 입력해주세요" />
            {/* <Button size="medium">중복체크</Button> */}
          </StIdbox>
          <div>
            <Sttext>패스워드</Sttext>
            <Input type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
              size="custom" width="460px" height="46px" fsize="16px" placeholder="비밀번호는 8~15자 이내로 입력해주세요" />
          </div>




          <div>
            <Sttext>기수</Sttext>
            <Select.SelectboxA setUserYear={setUserYear} />
          </div>
          <div>
            <Sttext>주특기</Sttext>
            <Select.SelectboxB setUserSkill={setUserSkill} />
          </div>
          <StButtonbox>
            <div>
              <input
                type="checkbox"
                id="admin"
                name="userRole"
                value="admin"

                onChange={handleCheckChange}
              />
              <label htmlFor="admin">Admin</label>
              {userRole === 'admin' && (
                <div>
                  <label htmlFor="token">Token:</label>
                  <input
                    type="text"
                    id="token"
                    name="token"
                    value={token}
                    onChange={handleTokenChange}
                  />
                </div>
              )}
            </div>











          </StButtonbox>
        </StInputbox>
        <StButtonbox>
          <Button size="custom" onClick={() => { navigate("/login") }}>취소</Button>
          <Button onClick={handleSubmit} size="large">가입완료</Button>
        </StButtonbox>

      </StsignBox>
    </StLayout>
  );
}

export default SignUp;

const StIdbox = styled.div`
  display: flex;
  align-items: center;
`

const StIDtext = styled.div`
  font-size: 12px;
  font-weight: 700;
  transform: translateY(14px);
`

const Sttext = styled.div`
  font-size: 12px;
  font-weight: 700;
`

const Stheadtext = styled.p`
  font-size: 40px;
  font-weight: 700;
`;

const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StsignBox = styled.div`
  width: 640px;
  height: 742px;
  display: flex;
  border-radius: 18px;
  gap: 38px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
`;
const StInputbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StButtonbox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`