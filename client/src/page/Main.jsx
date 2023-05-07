import React from "react";
import Header from "./Header";
import styled from "styled-components";
import Button from "../components/Button";
import { getPosts } from "../api/post";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";

function Main() {
    const navigate = useNavigate();

    const { isLoading, isError, data, error } = useQuery("posts", getPosts);

    // if (isLoading) {
    //     return <h1>로딩중</h1>;
    // }

    // if (isError) {
    //     console.error(error);
    //     return <h1>오류가 발생하였습니다</h1>;
    //   }

    const handleDetailPageLinkClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <Container>
            <Header />
            <PostSection>
                <StText>항해66 게시판</StText>
                <Buttonbox>
                    <div>
                        <Button>All</Button>
                        <Button>Spring</Button>
                        <Button>React</Button>
                        <Button>Node.js</Button>
                    </div>
                </Buttonbox>
                <div class="posts-box">
                    {/* {data?.map((post) => {
                        return (
                            <TitleBox onClick={() => handleDetailPageLinkClick(post.postId)} class="title-box">
                                <Skillbox>{post.postSkill}</Skillbox>
                                <Stunderbar>
                                    <Commentbox>{post.postTitle}</Commentbox>
                                    <Viewbox>{post.postVisitCnt} View</Viewbox>
                                    <Likecommentbox>
                                        <span>
                                            <AiFillHeart color="red" />
                                        </span>
                                        <span> {post.postLikes}</span>
                                        <span>
                                            <BiCommentDetail />
                                        </span>
                                        <span>{post.cmtCount}</span>
                                    </Likecommentbox>
                                </Stunderbar>
                            </TitleBox>
                        );
                    })} */}
                </div>
            </PostSection>
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

const PostSection = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 70px;
  min-height: 100vh;
`;

const StText = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-right: 500px;
`

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
    padding-left:10px;
`

const Skillbox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
`

const Likecommentbox = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 120px;
    gap: 4px;
    height: 30px;
`

const Stunderbar = styled.div`
    width: 760px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid gray;
    align-items: center;
`
const Buttonbox = styled.div`
    width: 730px;
`

export default Main;
