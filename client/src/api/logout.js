import Cookies from "js-cookie"
import jwt_decode from 'jwt-decode';
import { setIsAuthenticated, setUserId } from "../redux/modules/authReducer"
import axios from "axios"


export const logout = async (dispatch) => {
    const token = getToken();
    const decoded = jwt_decode(token)
    const userId = decoded.sub
    try {
        await axios.delete('http://localhost:8080/auth/logout', { data: { userId } });

        Cookies.remove('token')
        dispatch(setUserId(null))
        dispatch(setIsAuthenticated(false))
        alert('로그아웃 되었습니다!')
    } catch (error) {
        console.error("로그아웃 오류", error)
        alert(error)
    }
}