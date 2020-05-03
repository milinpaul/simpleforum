import React from 'react'
import styled from 'styled-components'

import { getPostsUrl, getUsersUrl } from '../../../helpers/apiUrl'
import useRequest from '../../../Hooks/useRequest'
import Spinner from '../../../Components/Spinner'
import PostCard from './PostCard'

const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  justify-items: center;
  margin-top: 3rem;
`

const PostsListContainer = ({ history }) => {
  const [posts, loading] = useRequest({
    url: getPostsUrl(),
    method: { method: 'GET' },
  })
  const [users, userLoading] = useRequest({
    url: getUsersUrl(),
    method: { method: 'GET' },
  })

  if (loading || userLoading) {
    return <Spinner />
  }

  return (
    <PostGrid>
      {Object.keys(posts).length &&
        posts.map((post) => {
          const user = users.find((user) => user.id === post.userId)
          return (
            <PostCard
              history={history}
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
              userId={user?.id}
              username={user?.username} //optional chaining operation
            />
          )
        })}
    </PostGrid>
  )
}

export default PostsListContainer
