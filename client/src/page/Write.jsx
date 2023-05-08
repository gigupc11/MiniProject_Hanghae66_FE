import React from 'react'
import Header from './Header'
import styled from 'styled-components'
import Button from "../components/Button";
import Input from "../components/Input";
import Select from "../components/Select";

function Write({Open}) {
    return (
        <Container>
            <Header />
            <PostSection>
                <DetailBox2>
                    <TextWrap>게시글작성</TextWrap>
                </DetailBox2>
                <DetailBox>
                    <InputWrap>
                        <div>
                            <ContentsWrap>
                                분류 <select>
                                    <option>react</option>
                                    <option>node.js</option>
                                    <option>spring</option>
                                    </select>
                                제목 <Input size="custom" height={"30px"} width={"600px"} />
                                내용 <Input size="custom" height={"300px"} width={"auto"} />
                            </ContentsWrap>
                            <WriteBtnWrap>
                                <Button >입력</Button>
                            </WriteBtnWrap>
                        </div>
                    </InputWrap>
                </DetailBox>
            </PostSection>
        </Container>
    )
}

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
    padding: 10px ;
    gap:10px;
`

const CommentList = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
`
const TextWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    padding: 13px 30px ;
    font-weight: 900;
`

const WriteBtnWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    margin-bottom: -45px;
`

export default Write