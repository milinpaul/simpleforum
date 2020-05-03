import React from 'react'

import {
  ButtonWrapper,
  CommentWrapper,
  PostAuthor,
  PostBody,
  PostViewCard,
  PostViewWrapper,
  Title,
} from './PostStyles'
import Spinner from '../../../Components/Spinner'
import useRequest from '../../../Hooks/useRequest'
import { getSinglePostUrl, getCommentsForPostUrl } from '../../../helpers/apiUrl'
import Button from '../../../Components/Buttons'
import getUrlParam from '../../../helpers/getUrlParam'
import { Link } from 'react-router-dom'
import Comments from './Comments'

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
  return (
    <PostViewWrapper>
      <PostViewCard>
        <Title>{post?.title}</Title>
        <Link onClick={stopPropagation} to={`/user/${getUrlParam(location.search, 'userId')}`}>
          <PostAuthor>Author: {getUrlParam(location.search, 'user')}</PostAuthor>
        </Link>
        <PostBody>{post?.body}</PostBody>
        <ButtonWrapper>
          <Button onClick={onGoBackClickHandler}>Go Back</Button>
        </ButtonWrapper>
        <Title>Comments:</Title>
      </PostViewCard>
      <CommentWrapper>
        {comments?.map((comment) => (
          <Comments
            key={comment.id}
            name={comment.name}
            email={comment.email}
            body={comment.body}
          />
        ))}
      </CommentWrapper>
    </PostViewWrapper>
  )
}

export default PostViewContainer
