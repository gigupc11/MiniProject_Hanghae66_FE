import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Button from "../components/Button";
import { getPosts } from "../api/post";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

function Mypage() {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("posts", getPosts);

  if (isLoading) {
    return <h1>로딩중</h1>;
  }

  if (isError) {
    return <h1>오류가 발생하였습니다</h1>;
  }

  const handleDetailPageLinkClick = (id) => {
    navigate(`/detail/${id}`);
  };

  return (
    <Container>
      <Header />
      <Allsection>
      <Infosection>
        <Mypagetext>마이 페이지</Mypagetext>
        <Infotext>
          <div>ID : HangHae @ gmail.com</div>
          <div>Username : HangHae66</div>
          <div>기수 : 14기</div>
          <div>주특기 : React</div>
          <div>생성일 : 23.05.05</div>
        </Infotext>
        <Linesection>내 글 목록</Linesection>
      </Infosection>
      <PostSection>
        <div class="posts-box">
          {data.map((post) => {
            return (
              <TitleBox
                onClick={() => handleDetailPageLinkClick(post.postId)}
                class="title-box"
              >
                <Skillbox>{post.postSkill}</Skillbox>
                <Stunderbar>
                  <Commentbox>{post.title}</Commentbox>
                  <Viewbox>{post.viewCount} View</Viewbox>
                  <Likecommentbox>
                    <span>
                      <AiFillHeart color="red" />
                    </span>
                    <span> {post.postLikeCount}</span>
                    <span>
                      <BiCommentDetail />
                    </span>
                    <span>{post.commentCount}</span>
                  </Likecommentbox>
                </Stunderbar>
              </TitleBox>
            );
          })}
        </div>
      </PostSection>
      </Allsection>
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  height: 100vh;
`;
const Allsection = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`
const Infosection = styled.div`
  width: 800px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 450px;
`;

const Linesection = styled.div`
    font-size: 20px;
    font-weight: 600;
    border-bottom: 1px solid gray;
    margin-bottom: 10px;
`

const Mypagetext = styled.div`
    font-size: 60px;
    font-weight: 800;
    display: flex;
    align-items: center;
    height: 100px;
    margin-top: 100px;
`

const Infotext = styled.div`
    font-size: 20px;
    font-weight: 600;
    padding-left: 500px;
    margin-top: 40px;
`

const PostSection = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 22px;

  padding-bottom: 2px;
  width: 800px;
`;

const Viewbox = styled.span`
  margin-left: 90px;
`;

const Commentbox = styled.span`
  width: 400px;
  padding-left: 10px;
`;

const Skillbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
`;

const Likecommentbox = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  gap: 4px;
  height: 30px;
`;

const Stunderbar = styled.div`
  width: 760px;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid gray;
  align-items: center;
`;
const Buttonbox = styled.div`
  width: 730px;
`;

export default Mypage;
