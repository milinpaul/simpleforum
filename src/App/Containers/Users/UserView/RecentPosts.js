import React from 'react'

import PostGrid from '../../../Components/PostGrid'
import PostCard from '../../../Components/PostCard'
import Title from '../../../Components/Title'

const RecentPosts = ({ userPosts, history, user }) => {
  return (
    <>
      <Title>User's Recent Posts</Title>
      <PostGrid>
        {userPosts &&
          userPosts.map((post) => {
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
    </>
  )
}

export default RecentPosts
