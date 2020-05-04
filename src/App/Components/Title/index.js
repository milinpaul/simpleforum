import styled from 'styled-components'

export default styled.h1`
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
