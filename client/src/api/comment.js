import axios from "axios";
import Cookies from 'js-cookie';

const getToken = () => Cookies.get('token');

const addComment = async ({postId, newComment}) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `/comment/${postId}`,
        newComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error.response.data));
      console.log(token);
      console.error('인증에 실패했습니다:', error.response.data);
    }
  };

  const deleteComment = async (commentId) => {
    const token = getToken();
    try {
      const response = await axios.delete(
        `/comment/${commentId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error.response.data));
      console.log(token);
      console.error('인증에 실패했습니다:', error.response.data);
    }
  };

  const updateComment = async ({ commentId, updatedComment }) => {
    const token = getToken();
    try {
      const response = await axios.put(
        `/comment/${commentId}`,
        updatedComment,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
  
      console.log('인증에 성공했습니다:', response.data);
    } catch (error) {
      alert(JSON.stringify(error.response.data));
      console.log(token);
      console.error('인증에 실패했습니다:', error.response.data);
    }
  };

  export {addComment, deleteComment, updateComment}