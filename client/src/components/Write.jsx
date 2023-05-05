import React from "react";
import Header from "../page/Header";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Selectbox from "./Select";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;

const DetailBox2 = styled.div`
  background-color: #f50000;
  border-radius: 20px 20px 0 0;
  overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  height: 600px;
  margin-top: 30px;
    gap: 5px;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 13px 30px;
  font-weight: 900;
`;

const WriteBtnWrap = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 80px;
  margin-top: 40px;
`;

const Modalbox = styled.div`
  width: 800px;
  height: 800px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 원래 그림자 */
  background-color: #fff;
  border-radius: 20px 20px 20px 20px;
  overflow: hidden; /*필요한 경우 오버플로우 숨김 */
`;

function Write() {
  return (
    <Container>
      <Modalbox>
        <DetailBox2>
          <TextWrap>게시글작성</TextWrap>
        </DetailBox2>
        <InputWrap>
          <div>
            <ContentsWrap>
              카테고리
              <div>
                <Selectbox.SelectboxC />
              </div>
              제목
              <div>
                <Input placeholder = "제목을 입력해주세요" size="custom" width ="100%"/>
              </div>
              내용
              <div>
                <Input size="custom" width ="100%" height ="440px"/>
              </div>
            </ContentsWrap>
            <WriteBtnWrap>
              <Button size ="medium">작성완료</Button>
            </WriteBtnWrap>
          </div>
        </InputWrap>
      </Modalbox>
    </Container>
  );
}

export default Write;
