import React from "react";
import styled from "styled-components";

function SignUp() {
  return (
    <StLayout>
      <StLoginBox>
        회원가입
        <StInputbox>
          <div>
            <div>아이디</div>
            <input />
            <button>중복체크</button>
          </div>
          <div>
            <div>패스워드</div>
            <input />
          </div>
          <div>
            <div>패스워드 확인</div>
            <input />
          </div>
          <div>
            <div>기수</div>
            <select />
          </div>
          <div>
            <div>주특기</div>
            <select />
          </div>
        </StInputbox>
        <div>
          <button>취소</button>
          <button>가입완료</button>
        </div>
      </StLoginBox>
    </StLayout>
  );
}

export default SignUp;

const StLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
const StLoginBox = styled.div`
  width: 640px;
  height: 742px;
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
  gap: 10px;
`;
