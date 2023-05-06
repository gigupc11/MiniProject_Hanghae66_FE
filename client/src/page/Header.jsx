import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import Button from "../components/Button";
import Write from '../components/Write';

const HeaderBar = styled.div`
    position: relative;
    right: 0;
    top: 0;
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
    const [modal,setModal] = useState(false)

    return (
        <>
        <div>
            {modal && (<Write Open = {() => {
                setModal(false)
            }} />)}
        </div>
        
        <HeaderBar>
            <Logo class="logo" src={logo} />
                <BtnBox class="btn-box">
                    <Button onClick = {() => {
                        setModal(true)
                    }}>글쓰기</Button>
                    <Button>로그아웃</Button>
                </BtnBox>
        </HeaderBar>
        </>
    )
}

export default Header