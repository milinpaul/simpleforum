import React from 'react'

import { getPostsUrl, getUsersUrl } from '../../../helpers/apiUrl'
import useRequest from '../../../Hooks/useRequest'
import Spinner from '../../../Components/Spinner'
import PostCard from '../../../Components/PostCard'
import PostGrid from '../../../Components/PostGrid'

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
      {posts &&
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
              username={user?.username}
            />
          )
        })}
    </PostGrid>
  )
}

export default PostsListContainer
