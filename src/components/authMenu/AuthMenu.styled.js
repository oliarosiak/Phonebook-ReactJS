import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavContainer = styled.nav`
  display: flex;
  align-items: baseline;
  padding: 4px 0;
`;

export const StyledNavLink = styled(NavLink)`
  color: var(--header-text-color);
  text-transform: uppercase;
  font-size: 18px;

  &:not(:last-child) {
    margin-right: 20px;
  }

  &:hover,
  &:focus {
    color: var(--accent-color);
  }

  &.active {
    font-size: 20px;
    font-weight: 700;
    color: var(--header-accent-color);
    text-decoration: underline;
  }
`;
