import React, { useState } from 'react'
import styled from 'styled-components'

const Input = styled.input`
  height: 3.5rem;
  width: 100rem;
  border-radius: 5px;
  font-size: 1.6rem;
  padding: 2rem;
  outline: none;
  border: 1px solid ${(props) => props.theme.secondaryTextColor};
  margin-bottom: 1rem;
`

const SuggestionListItem = styled.li`
  background: #f3f3f3;
  width: 100rem;
  padding: 2rem;
  font-size: 1.5rem;
  cursor: ${(props) => !props.disablePointer && 'pointer'};
  transition: all 0.3s;

  &:hover {
    background: #ccc;
  }
`

const SuggestionList = styled.ul`
  border: 1px solid ${(props) => props.theme.secondaryTextColor};
`

const Index = ({ suggestions = [], history }) => {
  const [showSuggestion, setshowSuggestion] = useState(false)
  const [filteredSuggestion, setFilteredSuggestion] = useState([])

  const renderSuggestionList = () => {
    if (showSuggestion) {
      if (filteredSuggestion.length) {
        return (
          <SuggestionList>
            {filteredSuggestion.map((suggestion) => (
              <SuggestionListItem onClick={() => onSuggestionClickHandler(suggestion)}>
                {suggestion.name}
              </SuggestionListItem>
            ))}
          </SuggestionList>
        )
      } else {
        return (
          <SuggestionList>
            <SuggestionListItem disablePointer>No Users Found!</SuggestionListItem>
          </SuggestionList>
        )
      }
    }
    return null
  }

  const onTextChangeHandler = (e) => {
    if (e.target.value) {
      const newSuggestions = suggestions.filter((suggestion) =>
        suggestion.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
      setFilteredSuggestion(newSuggestions)
      setshowSuggestion(true)
    } else {
      setshowSuggestion(false)
    }
  }

  const onSuggestionClickHandler = (user) => {
    history.push(`/user/${user.id}`)
  }

  return (
    <>
      <Input placeholder='Search for authors' onChange={onTextChangeHandler} />
      {renderSuggestionList()}
    </>
  )
}

export default Index
