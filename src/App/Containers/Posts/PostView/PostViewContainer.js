import React from 'react'
import styled from 'styled-components'

import Spinner from '../../../Components/Spinner'
import useRequest from '../../../Hooks/useRequest'
import { getSinglePostUrl, getCommentsForPostUrl } from '../../../helpers/apiUrl'
import Button from '../../../Components/Buttons'
import getUrlParam from '../../../helpers/getUrlParam'
import { Link } from 'react-router-dom'

const PostViewWrapper = styled.div`
  width: 80%;
`

const PostViewCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 3rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const PostTitle = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-decoration: underline;
`
const PostBody = styled.p`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`
const PostAuthor = styled.h3`
  font-size: 1.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.secondaryTextColor};
  cursor: pointer;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`

const ButtonWrapper = styled.div`
  text-align: center;
`

const PostViewContainer = ({ match, history, location }) => {
  const [post, loading] = useRequest({
    url: getSinglePostUrl(match?.params?.postId),
    method: { method: 'GET' },
  })
  const [comments, Commentsloading] = useRequest({
    url: getCommentsForPostUrl(match?.params?.postId),
    method: { method: 'GET' },
  })

  if (loading || Commentsloading) {
    return <Spinner />
  }

  const onGoBackClickHandler = () => {
    history.push('/')
  }
  const stopPropagation = (e) => e.stopPropagation()
  console.log('comments', comments)
  return (
    <PostViewWrapper>
      <PostViewCard>
        <PostTitle>{post?.title}</PostTitle>
        <Link onClick={stopPropagation} to={`/user/${getUrlParam(location.search, 'userId')}`}>
          <PostAuthor>{getUrlParam(location.search, 'user')}</PostAuthor>
        </Link>
        <PostBody>{post?.body}</PostBody>
        <ButtonWrapper>
          <Button onClick={onGoBackClickHandler}>Go Back</Button>
        </ButtonWrapper>
      </PostViewCard>
    </PostViewWrapper>
  )
}

export default PostViewContainer
