import React from 'react'
import styled from 'styled-components'

const CommentWrapper = styled.div`
  border: 1px solid #ccc;
  border-radius: 1rem;
  padding: 3rem;
  margin-bottom: 1.5rem;
`

const CommentInfo = styled.div`
  display: flex;

  & h5 {
    margin-bottom: 1rem;
    text-align: left;
    font-size: 1.5rem;
    font-weight: 400;
  }

  & label {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 1rem;
  }
  & p {
    font-size: 1.5rem;
    font-weight: 400;
    margin-right: 1rem;
  }
`

const EmailText = styled.h5`
  margin-bottom: 1rem;
  text-align: left;
  font-size: 1.5rem;
  font-weight: 400;
  color: ${(props) => props.theme.secondaryTextColor};
  text-decoration: underline;
`

const Comments = ({ name, email, body }) => {
  return (
    <CommentWrapper>
      <CommentInfo>
        <label>Subject: </label>
        <h5>{name}</h5>
      </CommentInfo>
      <CommentInfo>
        <label>Email: </label>
        <EmailText>{email}</EmailText>
      </CommentInfo>
      <CommentInfo>
        <label>Comment: </label>
        <p>{body}</p>
      </CommentInfo>
    </CommentWrapper>
  )
}

export default Comments
