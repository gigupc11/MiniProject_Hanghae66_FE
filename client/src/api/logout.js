import Cookies from "js-cookie"
import { setIsAuthenticated, setUserId } from "../redux/modules/authReducer"


export const logout = (dispatch) => {
    Cookies.remove('token')
    dispatch(setUserId(null))
    dispatch(setIsAuthenticated(false))
    alert('로그아웃 되었습니다!')
}