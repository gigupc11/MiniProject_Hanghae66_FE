import axios from "axios";


const getUsers = async (userId) => {
    const response = await axios.get('http://localhost:4000/mypage');
    return response.data;
  }

  export { getUsers };
