import axios from "axios";
import Cookies from 'js-cookie';

const getToken = () => Cookies.get('token');
const getToken2 = () => Cookies.get('token');

const addComment = async ({postId, newComment}) => {
    const token = getToken();
    const token2 = getToken2();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/comment/${postId}`,
        newComment,
        {
          headers: {
            ACCESS_KEY: `Bearer ${token}`,
            REFRESH_KEY: `Bearer ${token2}`,
          },
        }
      );
  
      // console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error.response.data));
      // console.log(token);
      console.error('인증에 실패했습니다:', error);
    }
  };

  const deleteComment = async (commentId) => {
    const token = getToken();
    const token2 = getToken2();
    try {
      const response = await axios.delete(
        `${process.env.REACT_APP_SERVER_URL}/comment/${commentId}`,
        {
          headers: {
            ACCESS_KEY: `Bearer ${token}`,
            REFRESH_KEY: `Bearer ${token2}`,
          },
        }
      );
  
      // console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error.response.data));
      // console.log(token);
      console.error('인증에 실패했습니다:', error.response.data);
    }
  };

  const updateComment = async ({ commentId, updatedComment }) => {
    const token = getToken();
    const token2 = getToken2();
    try {
      const response = await axios.put(
        `${process.env.REACT_APP_SERVER_URL}/comment/${commentId}`,
        updatedComment,
        {
          headers: {
            ACCESS_KEY: `Bearer ${token}`,
            REFRESH_KEY: `Bearer ${token2}`,
          },
        }
      );
  
      // console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error.response.data));
      // console.log(token);
      console.error('인증에 실패했습니다:', error.response.data);
    }
  };

  const likeCmt = async (commentId) => {
    const token = getToken();
    const token2 = getToken2();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_SERVER_URL}/comment/like/${commentId}`,
        {},
        {
          headers: {
            ACCESS_KEY: `Bearer ${token}`,
            REFRESH_KEY: `Bearer ${token2}`,
          },
        }
      );
  
      // console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error));
      // console.log(token);
      console.error('인증에 실패했습니다:', error);
    }
  };
  
  export {addComment, deleteComment, updateComment, likeCmt}