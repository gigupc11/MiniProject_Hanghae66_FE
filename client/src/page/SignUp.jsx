import React from "react";
import styled from "styled-components";
import Input from "../components/Input";
import Button from "../components/Button";
import Select from "../components/Select";

function SignUp() {
  return (
    <StLayout>
      <StsignBox>
        <Stheadtext>회원가입</Stheadtext>
        <StInputbox>
            <StIDtext>아이디</StIDtext>
          <StIdbox>
            <Input size="medium" placeholder = "아이디는 4 ~ 12자 이내로 입력해주세요"/>
            <Button size="medium">중복체크</Button>
          </StIdbox>
          <div>
            <Sttext>패스워드</Sttext>
            <Input size="custom" width="460px" height="46px" fsize ="16px" placeholder = "비밀번호는 4 ~ 12자 이내로 입력해주세요" />
          </div>
          <div>
            <Sttext>패스워드 확인</Sttext>
            <Input size="custom" width="460px" height="46px" fsize ="16px" placeholder = "비밀번호를 확인해주세요"/>
          </div>
          <div>
            <Sttext>기수</Sttext>
            <Select.SelectboxA/>
          </div>
          <div>
            <Sttext>주특기</Sttext>
            <Select.SelectboxB />
          </div>
        </StInputbox>
        <StButtonbox>
          <Button size="custom">취소</Button>
          <Button size="large">가입완료</Button>
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