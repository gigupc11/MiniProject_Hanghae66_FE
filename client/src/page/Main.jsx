import React, { useState, useEffect, useCallback } from "react";
import Header from "./Header";
import styled from "styled-components";
import Button from "../components/Button";
import { getPosts, searchPosts } from "../api/post";
import { useMutation, useQueries, useQuery, useQueryClient } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
import { BiCommentDetail } from "react-icons/bi";
import Input from "../components/Input";
import axios from "axios";


function Main() {
    const navigate = useNavigate();
    const [filteredData, setFilteredData] = useState([]);
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('');
    const [searchState, setSearchState] = useState(false);
    const [filteredSearchPost, setFilteredSearchPost] = useState([]);
    const [searchClicked, setSearchClicked] = useState(false);
    const [clickedAll, setClickedAll] = useState(false);
    const [clickedTitle, setClickedTitle] = useState(false);
    const [clickedContent, setClickedContent] = useState(false);
    const [clickedReset, setClickedReset] = useState(false);

    // const { isLoading, isError, data, error } = useQuery("posts", getPosts);
    const queryClient = useQueryClient();

    console.log(search, category)
    const [posts, searchPost] = useQueries([
        { queryKey: "posts", queryFn: getPosts },
        // { queryKey: ["searchPost", search, category, searchClicked], queryFn: searchPosts, enabled: searchClicked }
    ])

    useEffect(() => {
        if (posts.data) {
            setFilteredData([...posts.data].sort((a, b) => b.postId - a.postId));
        }
    }, [posts.data]);

    useEffect(() => {
        console.log(filteredSearchPost);
    }, [filteredSearchPost]);



    const filterPosts = (skill) => {
        if (skill === 'All') {
            setFilteredData([...posts.data].sort((a, b) => b.postSkill - a.postSkill));
        } else {
            const filtered = posts?.data?.filter((post) => post.postSkill === skill);
            setFilteredData(filtered.sort((a, b) => b.postSkill - a.postSkill));
        }
    };

    const filterSearch = (cate) => {
        setCategory(cate)
        if (cate === "all") {
          setClickedAll(true);
          setClickedTitle(false);
          setClickedContent(false);
        } else if (cate === "title") {
          setClickedAll(false);
          setClickedTitle(true);
          setClickedContent(false);
        } else if (cate === "content") {
          setClickedAll(false);
          setClickedTitle(false);
          setClickedContent(true);
        }
        else if (cate === "reset") {
            setClickedAll(false);
            setClickedTitle(false);
            setClickedContent(false);
            setSearchState(false)
          }
      };

    

      


    const handleSubmitButtonClick2 = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/post/search?keyword=${search}&sortBy=${category}`)

            const code = response.data.code;
            if (code != "ERR_BAD_REQUEST") {
                setFilteredSearchPost([...response.data].sort((a, b) => b.postId - a.postId))
                setSearchState(true)
            } else {
                alert("글자를 넣어주세요!")
            }
        } catch (error) {
            alert (error)
            console.error(error)
        }
    }

    // if (isLoading || isLoading2) {
    //     return <h1>로딩중</h1>;
    // }

    // if (isError || isError2) {
    //     console.error(error);
    //     return <h1>오류가 발생하였습니다</h1>;
    // }

    const handleDetailPageLinkClick = (id) => {
        navigate(`/detail/${id}`);
    };

    return (
        <Container>
            <Header />
            <PostSection>
                <StText>항해66 게시판</StText>
                <SearchWrap>
                    <InputWrap>
                        <Input placeholder = {'검색어를 입력해주세요'}onChange={(e) => setSearch(e.target.value)} size={"custom"} width ={"460px"} height={"46px"} fsize = {"20px"} />
                        <Button onClick={handleSubmitButtonClick2} size={"medium"}>검색</Button>
                    </InputWrap>
                <SerchCategoryWrap>
                    <Searchbtn clicked = {clickedAll} onClick={() => filterSearch('all')}>ALL</Searchbtn>
                    <Searchbtn clicked = {clickedTitle} onClick={() => filterSearch('title')}>TITLE</Searchbtn>
                    <Searchbtn clicked = {clickedContent} onClick={() => filterSearch('content')}>CONTENT</Searchbtn>
                    <Searchbtn clicked = {clickedReset} onClick={() => filterSearch('reset')}>RESET</Searchbtn>
                    </SerchCategoryWrap>    

                   
                </SearchWrap>
                <hr />
                {searchState ? (
                    filteredSearchPost?.length === 0 ? (
                        <p>검색어를입력하세요...</p>
                    ) : (
                        filteredSearchPost?.map((post) => {
                            return (
                                <TitleBox key={post.postId} onClick={() => handleDetailPageLinkClick(post.postId)} class="title-box">
                                    <Skillbox>{post.postSkill == "NODE" ? `${post.postSkill}.JS` :post.postSkill }</Skillbox>
                                    <Stunderbar>
                                        <Commentbox>{post.postTitle}</Commentbox>
                                        <Viewbox>{post.postVisitCnt} View</Viewbox>
                                        <Likecommentbox>
                                            <Sticon>
                                                <AiFillHeart color="red" />
                                            </Sticon>
                                            <span> {post.postLikes}</span>
                                            <Sticon>
                                                <BiCommentDetail />
                                            </Sticon>
                                            <span>{post.cmtCount}</span>
                                        </Likecommentbox>
                                    </Stunderbar>
                                </TitleBox>
                            )
                        }))) : null}
                {!searchState ? (
                    <div>
                        <Buttonbox>
                            <div>
                                <Button onClick={() => filterPosts('All')}>All</Button>
                                <Button onClick={() => filterPosts('SPRING')}>Spring</Button>
                                <Button onClick={() => filterPosts('REACT')}>React</Button>
                                <Button onClick={() => filterPosts('NODE')}>Node.js</Button>
                            </div>
                        </Buttonbox>
                        <div class="posts-box" >
                            {filteredData?.map((post) => {
                                return (
                                    <TitleBox key={post.postId} onClick={() => handleDetailPageLinkClick(post.postId)} class="title-box">
                                        <Skillbox>{post.postSkill == "NODE" ? `${post.postSkill}.JS` :post.postSkill }</Skillbox>
                                        <Stunderbar>
                                            <Commentbox>{post.postTitle}</Commentbox>
                                            <Viewbox>{post.postVisitCnt} View</Viewbox>
                                            <Likecommentbox>
                                                <Sticon>
                                                    <AiFillHeart color="red" />
                                                </Sticon>
                                                <span> {post.postLikes}</span>
                                                <Sticon>
                                                    <BiCommentDetail />
                                                </Sticon>
                                                <span>{post.cmtCount}</span>
                                            </Likecommentbox>
                                        </Stunderbar>
                                    </TitleBox>
                                );
                            })}
                        </div>
                    </div>) : null}
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
  height: 100%;
`;

const PostSection = styled.div`
  width: 100%;
  position: relative;
  flex-direction: column;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding-top: 120px;
  height: 100;
  z-index: 1;

`;

const StText = styled.div`
    font-size: 40px;
    font-weight: 800;
    margin-right: 500px;
`

const TitleBox = styled.div`
cursor: pointer;
  display: flex;
  justify-content: space-between;
  font-weight: 700;
  font-size: 22px;
  padding-bottom: 2px;
  width: 800px;
`;

const Viewbox = styled.span`
width: 130px;
display: flex;
justify-content: center;
`;

const Commentbox = styled.span`
    width: 400px;
    padding-left:10px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
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
    gap: 10px;
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

const Sticon = styled.span`
    align-items: center;
    display: flex;
`
const InputWrap = styled.div`
  width: auto;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
`;

const SearchWrap = styled.div`
    justify-content: center;
    align-items: center;
    display: flex;
    flex-direction: column;
` 

const SerchCategoryWrap = styled.div`
transform: translateX(-140px);
    justify-content: center;
    align-items: center;
    display: flex;
    gap: 25px;
`

const Searchbtn = styled.button`
    all: unset;
    font-weight: 600;
    font-size: 20px;
    cursor: pointer;
    color: ${(props) => (props.clicked ? "black" : "lightgray")};
`;

export default Main;
