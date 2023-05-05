import React from 'react'
import Header from './Header'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 1000px;
    min-width: 1000px;
    margin: 0 auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); 
    overflow: hidden;
`
const PostSection = styled.div`
    width: 100%;
    position: relative;
    flex-direction: column;
    display: flex;
    align-items: center;
    gap: 2rem;
    padding-top: 70px;
    min-height: 100vh;
`
const BtnRed = styled.button`
    background-color: #F50000;
    color: #fff;
    border: none;
    border-radius: 10px;
    width: 100px;
    height: 30px;
    font-size: 15px;
    padding: 10;
    margin: 10;
`

const DetailBox = styled.div`
    background-color: #fff;
    border-radius: 2px solid black;
    width: 500px;
    height: 500px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); /* 그림자 추가 */
    overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const InputWrap = styled.div`
    width: 400px;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const BtnWrap = styled.div`
    position: absolute;
    top:12%;
    right: 27%;
`
function Detail() {
    return (
        <Container>
            <Header />
            <PostSection>
                <DetailBox>
                    <BtnWrap>
                        조회수
                        좋아요
                        <BtnRed>수정</BtnRed>
                        <BtnRed>삭제</BtnRed>
                    </BtnWrap>
                    <InputWrap>
                        {/* 제목 <input />
                        내용 <input /> */}

                    <div class="title">제목</div> 
                    <div class="content">내용</div> 
                    덧글 <input /> <BtnRed>입력</BtnRed>
                    <div class="comment">덧글리스트</div>  
                    </InputWrap>
                </DetailBox>
            </PostSection>
        </Container>
    )
}

export default Detail