import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import Button from "../components/Button";
import Write from '../components/Write';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserId } from '../redux/modules/authReducer';


function Header() {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated)
    const userId = useSelector((state) => state.auth.userId)

    return (
        <>
            <div>
                {modal && (<Write Open={() => {
                    setModal(false)
                }} />)}
            </div>

            <HeaderBar>
                <Logo class="logo" src={logo} onClick={() => {
                    navigate("/")
                }} />
                {
                    <IdBtn onClick={() => {
                        navigate("/mypage")
                    }}>{userId} 님</IdBtn>
                }
                <BtnBox class="btn-box">
                    <Button onClick={() => {
                        setModal(true)
                    }}>글쓰기</Button>
                    <Button>로그아웃</Button>
                </BtnBox>
            </HeaderBar>
        </>
    )
}

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
    cursor: pointer;
`

const BtnBox = styled.div`
    display: flex;
    gap: 10px;
`
const IdBtn = styled.button`
    all: unset;
    color: white;
    font-size: 20px;
    font-weight: 600;
    margin-left: 600px;
    :hover {
        border-bottom: 2px solid white;
    }
`
export default Header