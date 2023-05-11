import React from 'react';
import {
  CommentBox,
  Comment,
  UserIDLine,
  StText,
  CommentLine,
  Stcommentbox,
  LikeBtn,
  ButtonLine,
  Stbtn,
} from './Detail'; 
import { HeartCmpCheckbox } from "../components/HeartCheckBox";
import Input from "../components/Input";

const CommentSection= ({
    comment,
    userId,
    userRoleLSState,
    updateCommentState,
    setUpdateCommentState,
    handleCommentUpdateButtonClick,
    handleCommentDeleteButtonClick,
    handleSubmitCmtLikeButtonClick,
    cmtChecked,
    setCmtChecked,
    setOldCmtContent,
  }) => {


    return (
        <div>
        {comment?.map((cmt, i) => (
            <CommentBox key={cmt.cmtId}>
                {updateCommentState === cmt.cmtId ? (
                    <Comment>
                        <UserIDLine>
                            <StText>
                                {cmt.cmtUserYear}기 {cmt.cmtUserName}
                            </StText>
                        </UserIDLine>
                        <CommentLine>
                            <Stcommentbox>
                                <Input
                                    defaultValue={cmt.cmtContent}
                                    onChange={(e) => setOldCmtContent(e.target.value)}
                                />
                            </Stcommentbox>
                            {((userId == cmt.cmtUserId) || (userRoleLSState == 'ADMIN')) && (
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
                            <LikeBtn>
                                <HeartCmpCheckbox
                                    handleSubmitCmtLikeButtonClick={(e) => handleSubmitCmtLikeButtonClick(cmt.cmtId, e)}
                                    cmtChecked={cmtChecked[i]}
                                    setCmtChecked={setCmtChecked}
                                />
                                {cmt.cmtLikes}
                            </LikeBtn>
                            {((userId == cmt.cmtUserId) || (userRoleLSState == 'ADMIN')) && (
                                <ButtonLine>
                                    <Stbtn onClick={() => setUpdateCommentState(cmt.cmtId)}>수정</Stbtn>
                                    <Stbtn
                                        onClick={() => handleCommentDeleteButtonClick(cmt.cmtId)}
                                    >
                                        삭제
                                    </Stbtn>
                                </ButtonLine>
                            )}

                        </CommentLine>
                    </Comment>
                )}
            </CommentBox>
        ))}
    </div>
    );
  };

export default CommentSection