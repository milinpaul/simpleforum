import React from 'react'
import styled from 'styled-components'

import Spinner from '../../../Components/Spinner'
import useRequest from '../../../Hooks/useRequest'
import { getSingleUserUrl, getPostsForUserUrl } from '../../../helpers/apiUrl'
import UserProfileCard from './UserProfileCard'
import RecentPosts from './RecentPosts'

const UserView = styled.div`
  display: flex;
  flex-direction: column;
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
      <UserProfileCard
        name={user.name}
        username={user.username}
        email={user.email}
        website={user.website}
        company={user.company}
        onGoBackClickHandler={onGoBackClickHandler}
      />
      <RecentPosts userPosts={userPosts} history={history} user={user} />
    </UserView>
  )
}

export default UserViewContainer
