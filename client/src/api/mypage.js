import axios from "axios";
import { useQuery } from "react-query";
import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode'

const getToken = () => Cookies.get('token');

const useGetUsers = () => {
    const token = getToken();
const decoded = jwt_decode(token)
const userId = decoded.sub
    const { data :data, isLoading, isError } = useQuery(
      ['users', userId],
      async () => {
        try{
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/mypage/${userId}`,{headers:{ACCESS_KEY:`Bearer ${token}`}});
            // console.log(response)
            return response.data;
        }catch(error){
            console.error(error)
        
      }
    }
    );

    return {data, isLoading, isError};
  };
  export { useGetUsers };
