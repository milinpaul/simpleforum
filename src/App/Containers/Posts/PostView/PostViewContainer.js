import React from "react";
import styled from "styled-components";

import Spinner from "../../../Components/Spinner";
import useRequest from "../../../Hooks/useRequest";
import { getSinglePostUrl } from "../../../helpers/apiUrl";
import Button from "../../../Components/Buttons";

const PostViewCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 3rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const PostTitle = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-bottom: 5rem;
  text-decoration: underline;
  text-align: center;
`;
const PostBody = styled.p`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`;

const ButtonWrapper = styled.div`
  text-align: center;
`;

const PostViewContainer = ({ match, history }) => {
  const [post, loading] = useRequest({
    url: getSinglePostUrl(match?.params?.postId),
    method: { method: "GET" },
  });

  if (loading) {
    return <Spinner />;
  }

  const onGoBackClickHandler = () => {
    history.push("/");
  };

  return (
    <PostViewCard>
      <PostTitle>{post?.title}</PostTitle>
      <PostBody>{post?.body}</PostBody>
      <ButtonWrapper>
        <Button onClick={onGoBackClickHandler}>Go Back</Button>
      </ButtonWrapper>
    </PostViewCard>
  );
};

export default PostViewContainer;
