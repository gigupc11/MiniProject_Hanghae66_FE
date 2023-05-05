import { BrowserRouter , Route , Routes } from "react-router-dom";
import Login from "../page/Login";
import SignUp from "../page/SignUp";


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
	)
}

export default Router