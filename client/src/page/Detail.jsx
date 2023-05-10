import React, { useEffect, useState } from "react";
import Header from "./Header";
import styled from "styled-components";
import Button from "../components/Button";
import Input from "../components/Input";
import { useQuery, useQueryClient } from "react-query";
import { useParams } from "react-router-dom";
import { useMutation } from "react-query";
import { useSelector, useDispatch } from 'react-redux';
import { getPosts, getPost, deletePost, updatePost, likePost } from "../api/post";
import { Link, useNavigate } from "react-router-dom";
import { addComment, deleteComment, updateComment, likeCmt } from "../api/comment";
import {HeartCheckbox, HeartCmpCheckbox} from "../components/HeartCheckBox";

// const

function Detail() {
    // 이전 컴포넌트에서 넘어온 parameter를 조회
    const params = useParams();
    // 리액트 쿼리 관련 코드
    const queryClient = useQueryClient();

    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const [comment, setComment] = useState([]);
    const [postTitle, setPostTitle] = useState("");
    const [postUserId, setPostUserId] = useState("");
    const [postLike, setPostLike] = useState(false);
    const [postContents, setPostContents] = useState("");
    const [cmtContent, setCmtContent] = useState("");
    const [oldCmtContent, setOldCmtContent] = useState("");
    const [update, setUpdate] = useState(false);
    const [updateCommentState, setUpdateCommentState] = useState(null);
    const [checked, setChecked] = useState(false);
    const [cmtChecked, setCmtChecked] = useState(false);
    const userId = useSelector((state) => state.auth.userId)
    const { isLoading, isError, data } = useQuery(["post", params.id], () => getPost(params.id), {
        refetchOnWindowFocus: false,
    });
    // const { isLoading, isError, data } = useQuery("post", getPost);
    console.log(data)
    useEffect(() => {
        if (data) {
            setPost(data);

            setPostTitle(data.postTitle)
            setPostContents(data.postContent)
            setPostUserId(data.postUserId)
            setChecked(data.chkpostLikes)
            // console.log(data.chkpostLikes)
            if (data.commentList) {
                setComment(data.commentList)
                setCmtChecked(data.commentList.chkCommentLikes)
                console.log(data.commentList)
            }
        }
    }, [data]);

    if (comment.length > 0) {
        // console.log(comment);
    }

    const deleteMutation = useMutation(deletePost, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
            console.log("성공");
            navigate(-1);
        },
    });
    const updateMutation = useMutation(updatePost, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
            console.log("성공");
            setUpdate(false)
            // navigate(-1);
        },
    });

    const addCommentMutation = useMutation(addComment, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
            console.log("성공");
        },
    });
    const deleteCommentMutation = useMutation(deleteComment, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
            console.log("성공");
        },
    });

    const updateCommentMutation = useMutation(updateComment, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
            console.log("성공");
        },
    });

    const likePostMutation = useMutation(likePost, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
            console.log("성공");
        },
    });

    const likeCmtMutation = useMutation(likeCmt, {
        onSuccess: () => {
            queryClient.invalidateQueries(["post", params.id]);
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
        // console.log(postId)
        const updatedPost = {
            postTitle,
            postContent: postContents,
        };
        updateMutation.mutate({ postId, updatedPost });
    };

    // 덧글 추가
    const handleCommentSubmitButtonClick = (event) => {
        event.preventDefault();
        event.stopPropagation();
        const postId = post?.postId;

        const newComment = {
            cmtContent,
        };
        addCommentMutation.mutate({ postId, newComment });
        setCmtContent("")
    };

    // 덧글 삭제
    const handleCommentDeleteButtonClick = (commentId) => {
        deleteCommentMutation.mutate(parseInt(commentId));
    };

    // 덧글 수정
    const handleCommentUpdateButtonClick = (commentId) => {
        const updatedComment = {
            cmtContent: oldCmtContent,
        };
        // console.log(commentId)
        setUpdateCommentState(null);
        updateCommentMutation.mutate({ commentId, updatedComment });
    };

    const handleSubmitLikeButtonClick = (e) => {
        // event.preventDefault();
        const postId = post?.postId;
        setChecked(e);
        likePostMutation.mutate(postId);
    };

    const handleSubmitCmtLikeButtonClick = (cmtid, e) => {
        // event.preventDefault();
        const cmtId = cmtid;

        setChecked(e);
        likeCmtMutation.mutate(cmtId);
    };
    console.log(comment.cmtId)

    const userid = post?.postUserId

    const useridmask = userid ? userid.charAt(0) + "*".repeat(userid.length - 1) : ""

    for (let i = 0; i < comment.length; i++) {
        const cmtUserName = comment[i].cmtUserName;
        comment[i].cmtUserName = cmtUserName.charAt(0) + "*".repeat(cmtUserName.length - 1);
    }

    return (
        <Container>
            <Header />
            <PostSection>
                <DetailBox2>
                    <TextWrap>게시글</TextWrap>
                </DetailBox2>
                <DetailBox>
                    <BtnWrap>
                        <Stuserid>작성자 : {useridmask}({post.userSkill})</Stuserid>
                        <StView>
                            <span>{post?.postVisitCnt + 'View'}</span>
                            <span>
                                <LikeBtn>
                                    <HeartCheckbox
                                        handleSubmitLikeButtonClick={handleSubmitLikeButtonClick}
                                        checked={checked}
                                        setChecked={setChecked}
                                    />
                                    {post.postLikes}
                                </LikeBtn>
                            </span>
                        </StView>
                        {userId == postUserId && (
                            update ? (
                                <>
                                    <Button onClick={handleSubmitButtonClick}>수정완료</Button>
                                </>
                            ) : (
                                <>
                                    <Button onClick={() => setUpdate(true)}>수정</Button>
                                    <Button onClick={handleDeleteButtonClick}>삭제</Button>
                                </>
                            )
                        )}
                    </BtnWrap>
                    {update ? (
                        <Stinput>
                            <Input
                                value={postTitle}
                                onChange={(e) => setPostTitle(e.target.value)}
                            />
                        </Stinput>
                    ) : (
                        <Sttitle>{post?.postTitle !== undefined ? post.postTitle : null}</Sttitle>
                    )}
                    <InputWrap>
                        <div>
                            <ContentsWrap>
                                {update ? (
                                    <Input
                                        value={postContents}
                                        onChange={(e) => setPostContents(e.target.value)}
                                    />
                                ) : (
                                    <h4 class="contents">{post?.postContent !== undefined ? post.postContent : null}</h4>
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
                                <div>
                                    {comment?.map((cmt) => (
                                        <CommentBox key={cmt.cmtId}>
                                            {updateCommentState === cmt.cmtId ? (
                                                <Comment>
                                                    <UserIDLine>
                                                        <StText>
                                                            {cmt.userYear}기 {cmt.cmtUserName}
                                                        </StText>
                                                    </UserIDLine>
                                                    <CommentLine>
                                                        <Stcommentbox>
                                                            <Input
                                                                defaultValue={cmt.cmtContent}
                                                                onChange={(e) => setOldCmtContent(e.target.value)}
                                                            />
                                                        </Stcommentbox>
                                                        {userId == cmt.cmtUserId && (
                                                            <ButtonLine>
                                                                <Stbtn
                                                                    onClick={() => handleCommentUpdateButtonClick(cmt.cmtId)}
                                                                >
                                                                    수정완료
                                                                </Stbtn>
                                                            </ButtonLine>
                                                        )}
                                                    </CommentLine>
                                                </Comment>
                                            ) : (
                                                <Comment>
                                                    <UserIDLine>
                                                        <StText>
                                                            {cmt.cmtUserYear}기 {cmt.cmtUserName}
                                                        </StText>
                                                    </UserIDLine>
                                                    <CommentLine>
                                                        <Stcommentbox>{cmt.cmtContent}</Stcommentbox>
                                                        {userId == cmt.cmtUserId && (
                                                            <ButtonLine>
                                                                <Stbtn onClick={() => setUpdateCommentState(cmt.cmtId)}>수정</Stbtn>
                                                                <Stbtn
                                                                    onClick={() => handleCommentDeleteButtonClick(cmt.cmtId)}
                                                                >
                                                                    삭제
                                                                </Stbtn>
                                                            </ButtonLine>
                                                        )}
                                                        <LikeBtn>
                                                            <HeartCmpCheckbox
                                                                handleSubmitCmtLikeButtonClick={(e)=>handleSubmitCmtLikeButtonClick(cmt.cmtId, e)}
                                                                cmtChecked={cmtChecked}
                                                                setCmtChecked={setCmtChecked}
                                                            />
                                                            {cmt.cmtLikes}
                                                        </LikeBtn>
                                                    </CommentLine>
                                                </Comment>
                                            )}
                                        </CommentBox>
                                    ))}
                                </div>
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

const Comment = styled.div`
    display: flex;
    align-items: center;
    width: 750px;
`

const CommentLine = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  width: 600px;
  border-bottom: 1px solid lightgray;
`;
const ButtonLine = styled.span`
  gap: 20px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
    width: 100px;
`;
const UserIDLine = styled.span`
  height: 40px;
  display: flex;
  align-items: center;
  width: 120px;

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
  font-size: 30px;
  margin-right: 270px;
`;

const Stinput = styled.span`
  font-size: 30px;
  margin-left: 5px;
`;
const Stuserid = styled.span`
font-weight: 700;
margin-right: 210px;
width: 400px;
`
const StView = styled.span`
width: 300px;
transform: translateX(-30px);
  gap: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 22px;
`;
const LikeBtn = styled.button`
  all: unset;
  font-size: 20px;
`;
const Stbtn = styled.button`
  all: unset;

  font-weight: 700;
  cursor: pointer;
  z-index: 500;
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