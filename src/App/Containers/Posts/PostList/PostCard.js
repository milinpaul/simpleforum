import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Post = styled.div`
  width: 40rem;
  height: 25rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 3rem;
  cursor: pointer;
`;

const PostTitle = styled.h3`
  color: ${(props) => props.theme.primaryTextColor};
  font-size: 1.7rem;
  font-weight: 700;
  padding-bottom: 1rem;
`;

const PostUser = styled.h4`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.secondaryTextColor};
  cursor: pointer;
  letter-spacing: 1px;
  margin: 1rem 0;
`;

const PostBody = styled.p`
  font-size: 1.6rem;
  word-spacing: 1px;
  font-weight: 300;
  text-overflow: ellipsis;
  white-space: pre;
  overflow: hidden;
  color: ${(props) => props.theme.primaryTextColor};
`;

const PostCard = ({ id, title, body, username, userId, history }) => {
  const onPostClickHandler = () => {
    history.push(`/post/${id}`);
  };
  const stopPropagation = (e) => e.stopPropagation();
  return (
    <Post onClick={onPostClickHandler} key={id}>
      <PostTitle>{title}</PostTitle>
      <Link onClick={stopPropagation} to={`/user/${userId}`}>
        <PostUser>{username}</PostUser>
      </Link>
      <PostBody>{body}</PostBody>
    </Post>
  );
};

export default PostCard;
