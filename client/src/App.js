import React, { useEffect } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { useDispatch } from 'react-redux';
import Router from "./shared/Router";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
import './App.css';
import { setIsAuthenticated, setUserId } from "./redux/modules/authReducer";

const queryClient = new QueryClient();

function App() {
  
  const dispatch = useDispatch();
  useEffect (() => {
    const token = Cookies.get('token')
    console.log(token)
    if(token) {
      try {
        const decoded = jwt_decode(token)
        dispatch(setUserId(decoded.sub))
        dispatch(setIsAuthenticated(true))

        
      } catch (error) {
        console.error("토큰 디코드 오류:", error)
        dispatch(setIsAuthenticated(false))
      }
    }
  },[dispatch])

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </div>
  );
}


export default App;
