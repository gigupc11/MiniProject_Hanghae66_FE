import { BrowserRouter , Route , Routes } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Main from "../page/Main";
import Detail from "../page/Detail";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
	)
}

export default Router