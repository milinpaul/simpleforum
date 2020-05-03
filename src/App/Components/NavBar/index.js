import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NavWrapper = styled.nav`
  width: 100%;
  height: 6.5rem;
  background: ${(props) => props.theme.secondaryTextColor};
  padding: 2rem;
  display: flex;
`;

const NavContent = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
`;

const Logo = styled.h1`
  font-size: 2rem;
  font-weight: 700;
`;

const NavItems = styled.ul`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`;

const NavItem = styled.li`
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: 300;
  letter-spacing: 1px;
  text-transform: uppercase;
  transition: all 0.3s;
  padding: 1.5rem;
  cursor: pointer;

  &:hover {
    background: #f39883;
  }
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.primaryTextColor};
`;

const index = () => {
  return (
    <NavWrapper>
      <NavContent>
        <Logo>Sample Forum</Logo>
        <NavItems>
          {["Home"].map((menu) => (
            <NavItem key={menu}>
              <StyledLink to="/">{menu}</StyledLink>
            </NavItem>
          ))}
        </NavItems>
      </NavContent>
    </NavWrapper>
  );
};

export default index;
