import React from 'react'
import styled from 'styled-components'

import Button from '../../../Components/Buttons'
import Title from '../../../Components/Title'

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

const UserProfileCard = ({ name, username, email, website, company, onGoBackClickHandler }) => {
  return (
    <UserViewCard>
      <Title>User Info</Title>
      <UserInfo>
        <label>Name: </label>
        <h3>{name}</h3>
      </UserInfo>
      <UserInfo>
        <label>Username: </label>
        <h3>{username}</h3>
      </UserInfo>
      <UserInfo>
        <label>Email: </label>
        <h3>{email}</h3>
      </UserInfo>
      <UserInfo>
        <label>Website: </label>
        <h3>{website}</h3>
      </UserInfo>
      <UserInfo>
        <label>Company Name: </label>
        <h3>{company?.name}</h3>
      </UserInfo>
      <Button onClick={onGoBackClickHandler}>Go Back</Button>
    </UserViewCard>
  )
}

export default UserProfileCard
