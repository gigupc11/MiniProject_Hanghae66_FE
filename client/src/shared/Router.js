import { BrowserRouter , Route , Routes } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";
import Main from "../page/Main";
import Detail from "../page/Detail";
import Write from "../components/Write";
import Mypage from "../page/Mypage";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/detail/:id" element={<Detail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/mypage/:id" element={<Mypage />}/>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
	)
}

export default Router