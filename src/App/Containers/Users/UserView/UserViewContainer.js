import React from 'react'
import styled from 'styled-components'

import Spinner from '../../../Components/Spinner'
import Button from '../../../Components/Buttons'
import useRequest from '../../../Hooks/useRequest'
import { getSingleUserUrl, getPostsForUserUrl } from '../../../helpers/apiUrl'
import PostGrid from '../../../Components/PostGrid'
import PostCard from '../../../Components/PostCard'

const UserView = styled.div`
  display: flex;
  flex-direction: column;
`

const UserViewCard = styled.div`
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  background-color: #fff;
  padding: 3rem;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const UserInfo = styled.div`
  display: flex;

  & h3 {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 400;
  }

  & label {
    font-size: 1.5rem;
    font-weight: 700;
    margin-right: 1rem;
  }
`

const Title = styled.h1`
  margin: 1.2rem 0;
  align-self: flex-start;
  font-size: 2rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    content: '';
    border-bottom: 2px solid #ccc;
  }
`

const UserViewContainer = ({ match, history }) => {
  const [user, loading] = useRequest({
    url: getSingleUserUrl(match?.params?.userId),
    method: { method: 'GET' },
  })
  const [userPosts, userPostsLoading] = useRequest({
    url: getPostsForUserUrl(match?.params?.userId),
    method: { method: 'GET' },
  })

  if (loading || userPostsLoading) {
    return <Spinner />
  }

  const onGoBackClickHandler = () => {
    history.push('/')
  }

  console.log('userPosts', userPosts)

  return (
    <UserView>
      <UserViewCard>
        <Title>User Info</Title>
        <UserInfo>
          <label>Name: </label>
          <h3>{user.name}</h3>
        </UserInfo>
        <UserInfo>
          <label>Username: </label>
          <h3>{user.username}</h3>
        </UserInfo>
        <UserInfo>
          <label>Email: </label>
          <h3>{user.email}</h3>
        </UserInfo>
        <UserInfo>
          <label>Website: </label>
          <h3>{user.website}</h3>
        </UserInfo>
        <UserInfo>
          <label>Company Name: </label>
          <h3>{user.company?.name}</h3>
        </UserInfo>
        <Button onClick={onGoBackClickHandler}>Go Back</Button>
      </UserViewCard>
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
    </UserView>
  )
}

export default UserViewContainer
