import styled from "styled-components";

export default styled.button`
  padding: 1rem 5rem;
  border: 2px solid ${(props) => props.theme.secondaryTextColor};
  border-radius: 4px;
  outline: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1.6rem;

  &:hover {
    background: ${(props) => props.theme.secondaryTextColor};
    color: #fff;
  }
`;
