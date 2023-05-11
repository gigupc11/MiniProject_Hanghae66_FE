import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import logo from '../assets/logo.png'
import Button from "../components/Button";
import Write from '../components/Write';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setUserId } from '../redux/modules/authReducer';
import { logout } from '../api/logout';

function Header() {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
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
                <Logo src={logo} onClick={() => {
                    navigate("/")
                }} />
                {isAuthenticated ?
                    <>
                        <IdBtn onClick={() => {
                            navigate(`/mypage/${userId}`)
                        }}>{userId} {"님"}</IdBtn>


                        <BtnBox>
                            <Button onClick={() => {
                                setModal(true)
                            }}>글쓰기</Button>
                            <Button onClick={() => logout(dispatch)}>로그아웃</Button>
                        </BtnBox>
                    </>
                    : <Button onClick={() => navigate('/login')}>로그인</Button>
                }

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
    height: 60px;
    justify-content: space-between;
    padding: 15px 5%;
    background: #000;
    position: fixed;
    z-index: 888;
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
    width: 250px;
    font-size: 20px;
    font-weight: 600;
    transform: translateX(240px);
    text-align: right;
    cursor: pointer;
    :hover {
        color: lightgray;
    }
`
export default Header