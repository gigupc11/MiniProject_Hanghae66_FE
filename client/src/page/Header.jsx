import React from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import Button from "../components/Button";

const HeaderBar = styled.div`
    position: relative;
    right: 0;
    top: 0;
    z-index: 1000;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 5%;
    background: #000;
`

const Logo = styled.img`
    font-size: 30px;
    font-weight: 700;
    width: 100px;
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
                    <Button>글쓰기</Button>
                    <Button>로그아웃</Button>
                </BtnBox>
        </HeaderBar>
    )
}

export default Header