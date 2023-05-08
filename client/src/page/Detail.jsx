import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { getPosts, deletePost, updatePost, likePost } from "../api/post";
import { Link, useNavigate } from "react-router-dom";
import { addComment, deleteComment, updateComment } from "../api/comment";
import HeartCheckbox from "../components/HeartCheckBox";

// const

function Detail() {
    // 이전 컴포넌트에서 넘어온 parameter를 조회
    const params = useParams();
    // 리액트 쿼리 관련 코드
    const queryClient = useQueryClient();

    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [postTitle, setPostTitle] = useState("");
    const [postContents, setPostContents] = useState("");
    const [cmtContent, setCmtContent] = useState("");
    const [oldCmtContent, setOldCmtContent] = useState("");
    const [update, setUpdate] = useState(false);
    const [updateCommentState, setUpdateCommentState] = useState(null);
    const [checked, setChecked] = useState(false);

    console.log(update)
    const { isLoading, isError, data } = useQuery("posts", getPosts);
    // console.log(data)

    useEffect(() => {
        if (data) {
            const filteredData = data?.filter((item) => item.postId === parseInt(params.id));
    
            if (filteredData && filteredData.length > 0) {
                const postData = filteredData[0];
                setPost(postData);
            }
        }
    }, [data, params.id]);
    
    const deleteMutation = useMutation(deletePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            console.log("성공");
            navigate(-1);
        },
    });
    const updateMutation = useMutation(updatePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            console.log("성공");
            navigate(-1);
        },
    });

    const addCommentMutation = useMutation(addComment, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            console.log("성공");
            navigate(-1);
        },
    });
    const deleteCommentMutation = useMutation(deleteComment, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            console.log("성공");
            navigate(-1);
        },
    });

    const updateCommentMutation = useMutation(updateComment, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            console.log("성공");
            navigate(-1);
        },
    });

    const likePostMutation = useMutation(likePost, {
        onSuccess: () => {
            queryClient.invalidateQueries("posts");
            console.log("성공");
        },
    });


    if (isLoading) {
        return <h1>로딩중</h1>;
    }

    if (isError) {
        return <h1>오류가 발생하였습니다</h1>;
    }

    // const filteredData = data.filter(
    //     (item) => item.postId === parseInt(params.id)
    // );

    // const oldTitle = filteredData[0]?.postTitle;
    // const oldContents = filteredData[0]?.postContents;
    // const comments = filteredData[0]?.comments;
    // console.log(comments);
    // 게시글 삭제
    const handleDeleteButtonClick = (event) => {
        event.preventDefault();
        const postId = post?.postId;
        deleteMutation.mutate(parseInt(postId));
    };
    // 게시글 수정
    const handleSubmitButtonClick = (event) => {
        event.preventDefault();
        const postId = post?.postId;
        console.log(postId)
        const updatedPost = {
            postTitle,
            postContents,
        };
        updateMutation.mutate({ postId, updatedPost });
    };

    // 덧글 추가
    const handleCommentSubmitButtonClick = (event) => {
        event.preventDefault();
        const postId = post?.postId;

        const newComment = {
            cmtContent,
        };
        addCommentMutation.mutate({ postId, newComment });
    };

    // 덧글 삭제
    const handleCommentDeleteButtonClick = (commentId) => {
        deleteCommentMutation.mutate(parseInt(commentId));
    };

    // 덧글 수정
    const handleCommentUpdateButtonClick = (commentId) => {
        const updatedComment = {
            cmtContent,
        };
        console.log(commentId)
        setUpdateCommentState(null);
        updateCommentMutation.mutate({ commentId, updatedComment });
    };

    const handleSubmitLikeButtonClick = (e) => {
        // event.preventDefault();
        const postId = post?.postId;
        setChecked(e);
        likePostMutation.mutate(postId);
    };

    return (
        <Container>
            <Header />
            <PostSection>
                <DetailBox2>
                    <TextWrap>게시글</TextWrap>
                </DetailBox2>
                <DetailBox>
                    <BtnWrap>
                        {update ? (
                            <Sttitle>
                                <Input
                                    value={postTitle}
                                    onChange={(e) => setPostTitle(e.target.value)}
                                />
                            </Sttitle>
                        ) : (
                            <Sttitle>{post?.postTitle !== undefined ? post.postTitle : null}</Sttitle>
                        )}

                        <StView>
                            <span>5View</span>
                            <span>
                                <LikeBtn>
                                    <HeartCheckbox
                                        handleSubmitLikeButtonClick={handleSubmitLikeButtonClick}
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                </LikeBtn>
                            </span>
                        </StView>
                        {update ? (
                            <>
                            <Button onClick={handleSubmitButtonClick}>수정완료</Button>
                            </>
                        ) : (
                            <>
                                <Button onClick={() => setUpdate(true)}>수정</Button>
                                <Button onClick={handleDeleteButtonClick}>삭제</Button>
                            </>
                        )}
                    </BtnWrap>
                    <InputWrap>
                        <div>
                            <ContentsWrap>
                                {/* 여기 내용들어가는 부분 코드인데 확인한번만 부탁드리겠습니다! */}
                                {update ? (
                                    <Input
                                        value={postContents}
                                        onChange={(e) => setPostContents(e.target.value)}
                                    />
                                ) : (
                                    <h4 class="contents"></h4>
                                )}
                            </ContentsWrap>

                            <CommentWrap>
                                <StText>Comment</StText>
                                <Input
                                    value={cmtContent}
                                    onChange={(e) => setCmtContent(e.target.value)}
                                    size="custom"
                                    height={"30px"}
                                    width={"580px"}
                                />
                                <Button onClick={handleCommentSubmitButtonClick}>입력</Button>
                            </CommentWrap>

                            <div>
                                {/* <CommentBox>
                                    {comments?.map((cmtContent) => (
                                        <CommentBox key={cmtContent.cmtId}>
                                            {updateCommentState === cmtContent.cmtId ? (
                                                <>
                                                    <UserIDLine>
                                                        <StText>
                                                            {cmtContent.userYear}기 {cmtContent.cmtUserName}
                                                        </StText>
                                                    </UserIDLine>
                                                    <CommentLine>
                                                        <Stcommentbox>
                                                            <Input
                                                                value={oldCmtContent}
                                                                onChange={(e) => setCmtContent(e.target.value)}
                                                            />
                                                        </Stcommentbox>
                                                    </CommentLine>
                                                    <ButtonLine>
                                                        <Stbtn
                                                            onClick={() => handleCommentUpdateButtonClick(cmtContent.cmtId)}
                                                        >
                                                            수정완료
                                                        </Stbtn>
                                                    </ButtonLine>

                                                </>
                                            ) : (
                                                <>
                                                    <UserIDLine>
                                                        <StText>
                                                            {cmtContent.userYear}기 {cmtContent.cmtUserName}
                                                        </StText>
                                                    </UserIDLine>
                                                    <CommentLine>
                                                        <Stcommentbox>{cmtContent.cmtContent}</Stcommentbox>
                                                    </CommentLine>
                                                    <ButtonLine>
                                                        <Stbtn onClick={() => setUpdateCommentState(cmtContent.cmtId)}>수정</Stbtn>
                                                        <Stbtn
                                                            onClick={() => handleCommentDeleteButtonClick(cmtContent.cmtId)}
                                                        >
                                                            삭제
                                                        </Stbtn>
                                                    </ButtonLine>
                                                </>
                                            )}
                                        </CommentBox>
                                    ))}
                                </CommentBox> */}
                            </div>
                        </div>
                    </InputWrap>
                </DetailBox>
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
  justify-content: center;
  height: 100vh;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
const DetailBox2 = styled.div`
  background-color: #f50000;
  border-radius: 20px 20px 0 0;
  width: 70%;
  height: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px -3px 7px;
  overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
  /* display: flex; */
  /* position: absolute; */
  flex-direction: column;
  z-index: 12;
`;

const DetailBox = styled.div`
  position: relative;
  background-color: #fff;
  border-radius: 0 0 20px 20px;
  width: 70%;
  height: auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 추가 */
  overflow: hidden; /* 필요한 경우 오버플로우 숨김 */
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  height: 600px;
  padding: 30px;
  z-index: 11;
`;

const InputWrap = styled.div`
  width: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const BtnWrap = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const ContentsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0px;
`;

const CommentWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
  gap: 10px;
`;

const CommentLine = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  position: fixed;
  margin-left: 135px;
  width: 600px;
  border-bottom: 1px solid lightgray;
  /* background-color: red; */
`;
const ButtonLine = styled.div`
  gap: 20px;
  height: 40px;
  /* width: 200px; */
  display: flex;
  align-items: center;
  width: 80px;

  margin-left: 640px;
  justify-content: center;
`;
const UserIDLine = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  position: fixed;

`;
const CommentBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: 40px;
  justify-content: center;
`;
const TextWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  padding: 13px 30px;
  font-weight: 900;
`;

const StText = styled.p`
  font-weight: 600;
`;
const Sttitle = styled.h1`
  font-size: 40px;
  margin-right: 35px;
`;

const StView = styled.span`
  width: 170px;
  gap: 20px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 22px;
`;
const LikeBtn = styled.button`
  all: unset;
  font-size: 20px;
  :active {
    transform: scale(120%);
  }
`;
const Stbtn = styled.button`
  all: unset;
  width: 100px;
  height: 100px;
  font-weight: 700;
  :hover {
    color: gray;
  }
  :active {
    transform: scale(90%);
  }
`;

const Stcommentbox = styled.div`
  width: 500px;
  font-weight: 700;
`;
export default Detail;