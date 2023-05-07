import React, { useState } from "react";
import Header from "../page/Header";
import styled from "styled-components";
import Button from "./Button";
import Input from "./Input";
import Selectbox from "./Select";
import useInput from "../hooks/useInput";
import { useQueryClient } from "react-query";
import { useMutation } from "react-query";
import { addPosts } from "../api/post";
import { createPortal } from "react-dom";
import { useSpring, animated } from '@react-spring/web'

function Write({ Open }) {
  const [title, handleTitleChange, resetTitle] = useInput("");
  const [contents, handleContentsChange, resetContents] = useInput("");
  const [userSkill, setUserSkill] = useState("");

  console.log(title, contents, userSkill);
  const queryClient = useQueryClient();

  const mutation = useMutation(addPosts, {
    onSuccess: () => {
      queryClient.invalidateQueries("posts");
      console.log("성공");
    },
  });

  const handleSubmitButtonClick = (event) => {
    event.preventDefault();

    const addPost = {
      postTitle: title,
      postContent: contents,
      postSkill: userSkill,
    };

    mutation.mutate(addPost);
    resetTitle();
    resetContents();
    Open(false)
  };


const openAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: 200 },
  });

  return createPortal(
    <animated.div style={openAnimation}>
    <Container>
      <Modalbox>
        <DetailBox2>
          <TextWrap>게시글작성</TextWrap>
          <CloseBtn onClick={()=> {
            Open(false)
          }}>X</CloseBtn>
        </DetailBox2>
        <InputWrap>
          <div>
            <ContentsWrap>
              카테고리
              <div>
                <Selectbox.SelectboxC setUserSkill={setUserSkill} />
              </div>
              제목
              <div>
                <Input
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="제목을 입력해주세요"
                  size="custom"
                  width="100%"
                />
              </div>
              내용
              <div>
                <Input
                  value={contents}
                  onChange={handleContentsChange}
                  size="custom"
                  width="100%"
                  height="340px"
                />
              </div>
            </ContentsWrap>
            <WriteBtnWrap>
              <Button
                onClick={(event) => handleSubmitButtonClick(event)}
                size="medium"
              >
                작성완료
              </Button>
            </WriteBtnWrap>
          </div>
        </InputWrap>
      </Modalbox>
    </Container>
    </animated.div>,
    document.getElementById("modal")
  );
}
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
  position: fixed;
`;

const CloseBtn = styled.button`
    all: unset;
    font-size: 31px;
    color: white;
    font-weight: 700;
    cursor: pointer;
    :active{
        transform: scale(80%);
    }
`

const DetailBox2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f50000;
  border-radius: 20px 20px 0 0;
  padding: 7px 30px;

  overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
`;

const InputWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 600px;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  height: 500px;
  margin-top: 130px;
  gap: 5px;
`;

const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  font-weight: 900;
`;

const WriteBtnWrap = styled.div`
  display: flex;
  justify-content: end;
  margin-bottom: 80px;
  margin-top: 40px;
`;

const Modalbox = styled.div`
  width: 700px;
  height: 700px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* 원래 그림자 */
  background-color: #fff;
  border-radius: 20px 20px 20px 20px;
  overflow: hidden; /*필요한 경우 오버플로우 숨김 */
`;

export default Write;
