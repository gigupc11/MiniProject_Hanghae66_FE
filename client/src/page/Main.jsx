import React from 'react'
import Header from './Header'
import styled from 'styled-components'


export const btnColor_red = "#F50000"

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

const TitleBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding-bottom: 2px;
    border-bottom: 1px solid black;
    width: 600px;
    text-align: left;
`
function Main() {
    return (
        <Container>
            <Header />
            <PostSection>
                <div class="left-align">
                    <div>
                        <BtnRed>react</BtnRed>
                        <BtnRed>node.js</BtnRed>
                        <BtnRed>spring</BtnRed>
                    </div>
                </div>
                <div class="posts-box">

                    <TitleBox class="title-box">
                        <div>
                            <span>닉네임1</span> &nbsp;
                            <span class="title">제목1</span>
                        </div>
                        <div>
                            <span>조회수</span>
                            <span>좋아요</span>
                            <span>코멘트</span>
                        </div>
                    </TitleBox>
                    <br />
                    <TitleBox class="title-box">
                        <div>
                            <span>닉네임1</span> &nbsp;
                            <span class="title">제목1</span>
                        </div>
                        <div>
                            <span>조회수</span>
                            <span>좋아요</span>
                            <span>코멘트</span>
                        </div>
                    </TitleBox>
                    <br />
                    <TitleBox class="title-box">
                        <div>
                            <span>닉네임1</span> &nbsp;
                            <span class="title">제목1</span>
                        </div>
                        <div>
                            <span>조회수</span>
                            <span>좋아요</span>
                            <span>코멘트</span>
                        </div>
                    </TitleBox>
                </div>
            </PostSection>
        </Container>
    )
}

export default Main