import axios from "axios";
import Cookies from 'js-cookie';

const getToken = () => Cookies.get('token');

const getPosts = async () => {
  const response = await axios.get('http://localhost:8080/post');
  return response.data;
}

const getPost = async (postId) => {
  const token = getToken();
  const response = await axios.get(`http://localhost:8080/post/${postId}`,
    {
      headers: {
        ACCESS_KEY: `Bearer ${token}`,
      },
    }
  );
  return response.data;
}

const addPosts = async (newPost) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `http://localhost:8080/post`,
      newPost,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
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
      `http://localhost:8080/post/${postId}`,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
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
  console.log("test1",token)
  try {
    const response = await axios.put(
      `http://localhost:8080/post/${postId}`,
      updatedPost,
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );

    console.log('인증에 성공했습니다:', response.data);
  } catch (error) {
    alert(JSON.stringify(error.message));
    console.log("test2" , token);
    console.error('인증에 실패했습니다:', error.message);
  }
};

const likePost = async (postId) => {
  const token = getToken();
  try {
    const response = await axios.post(
      `http://localhost:8080/like/${postId}`,
      {},
      {
        headers: {
          ACCESS_KEY: `Bearer ${token}`,
        },
      }
    );

    console.log('인증에 성공했습니다:', response.data);
  } catch (error) {
    alert(JSON.stringify(error));
    console.log(token);
    console.error('인증에 실패했습니다:', error);
  }
};


export { getPosts, getPost, addPosts, deletePost, updatePost, likePost };
