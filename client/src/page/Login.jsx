import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <StLayout>
      <StLoginBox>
        항해66
        <StInputbox>
          <input />
          <input />
        </StInputbox>
        <div>
          <button>회원가입</button>
          <button>로그인</button>
        </div>
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
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 0px 21px rgba(0, 0, 0, 0.25);
`;
const StInputbox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
