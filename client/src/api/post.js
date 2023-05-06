import axios from "axios";
import Cookies from 'js-cookie';

const getToken = () => Cookies.get('token');

const getPosts = async () => {
    const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/posts`);
    return response.data;
}


const addPosts = async (newPost) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `/post`,
        newPost,
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

  const deletePost = async (postId) => {
    const token = getToken();
    try {
      const response = await axios.delete(
        `/post/${postId}`,
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

  const updatePost = async ({ postId, updatedPost }) => {
    const token = getToken();
    try {
      const response = await axios.put(
        `/post/${postId}`,
        updatedPost,
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

  const likePost = async (postId) => {
    const token = getToken();
    try {
      const response = await axios.post(
        `/like/${postId}`,
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
export { getPosts, addPosts, deletePost, updatePost, likePost};