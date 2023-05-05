import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Button from "../components/Button";
import Input from "../components/Input";

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
const DetailBox2 = styled.div`
    background-color: #F50000;
    border-radius: 20px 20px 0 0;
    width: 70%;
    height: 50px;
    box-shadow: 0 0 -10px rgba(0, 0, 0, 0.5); /* 원래 그림자 */
    overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
    /* display: flex; */
    position: absolute;
    flex-direction: column;
    z-index: 12;
`;

const DetailBox = styled.div`
    background-color: #fff;
    border-radius: 20px;
    width: 70%;
    height: auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
    overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 70px 30px;
    z-index: 11;
`

const InputWrap = styled.div`
    width: auto;
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
`

const BtnWrap = styled.div`
    display: flex;
    justify-content: end;
    align-items: center;
    `

const ContentsWrap = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
`

const CommentWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0 ;
    gap:10px;
`

const CommentList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 13px 30px ;
    font-weight: 900;
`

function Detail() {
    return (
        <Container>
            <Header />
            <PostSection>
                <DetailBox2>
                    <TextWrap>게시글</TextWrap>
                </DetailBox2>
                <DetailBox>
                    <BtnWrap>
                        조회수
                        좋아요
                        <Button>수정</Button>
                        <Button>삭제</Button>
                    </BtnWrap>
                    <InputWrap>

                        <div>
                            {/* <ContentsWrap>
                                제목 <Input size="custom" height={"30px"} width={"auto"} />
                                내용 <Input size="custom" height={"300px"} width={"auto"} />
                            </ContentsWrap> */}
                            <ContentsWrap>
                                <h2>제목</h2> <br />
                                <h4 class="content">내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내용내
                                    용내용내용내용내용내용내용내용내용내용</h4>
                            </ContentsWrap>
                            <CommentWrap>
                                덧글 <Input size="custom" height={"30px"} width={"490px"} /><Button >입력</Button>
                            </CommentWrap>
                            <CommentList>
                                <CommentList>
                                    <div>덧글작성자</div>
                                    <div>덧글내용</div>
                                </CommentList>
                                <CommentList>
                                    <Button bc={"lightgray"} hoverbc={"gray"}>수정</Button>
                                    <Button bc={"lightgray"} hoverbc={"gray"}>삭제</Button>
                                </CommentList>
                            </CommentList>
                        </div>
                    </InputWrap>
                </DetailBox>
            </PostSection>
        </Container>
    )
}

export default Detail