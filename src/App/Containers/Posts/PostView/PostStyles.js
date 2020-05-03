import styled from 'styled-components'

export const PostViewWrapper = styled.div`
  width: 80%;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  margin-top: 5rem;
`

export const PostViewCard = styled.div`
  background-color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Title = styled.h2`
  font-size: 2.2rem;
  letter-spacing: 1px;
  margin-bottom: 1rem;
  text-decoration: underline;
`
export const PostBody = styled.p`
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`
export const PostAuthor = styled.h3`
  font-size: 1.7rem;
  font-weight: 400;
  color: ${(props) => props.theme.secondaryTextColor};
  cursor: pointer;
  letter-spacing: 1px;
  margin-bottom: 5rem;
`

export const ButtonWrapper = styled.div`
  text-align: center;
`

export const CommentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
