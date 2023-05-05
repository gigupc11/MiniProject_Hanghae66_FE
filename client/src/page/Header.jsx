import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'

const HeaderBar = styled.div`
    position: relative;
    right: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 15%;
    background: #000;
`

const Logo = styled.img`
    font-size: 30px;
    font-weight: 700;
    width: 100px;
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

const BtnBox = styled.div`
    display: flex;
    gap: 10px;
`

function Header() {
    return (
        <HeaderBar>
            <Logo class="logo" src={logo} />
                <BtnBox class="btn-box">
                    <BtnRed>글쓰기</BtnRed>
                    <BtnRed>로그아웃</BtnRed>
                </BtnBox>
        </HeaderBar>
    )
}

export default Header