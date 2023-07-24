import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.div`
  min-height: calc(100vh - 500px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4px 0;
`;

export const MainHeader = styled.h1`
  margin: 0 auto 30px;
  text-transform: uppercase;
  letter-spacing: 8px;
`;

export const Links = styled(NavLink)`
  display: inline-flex;
  text-decoration: underline;
  color: var(--add-color);

  &:hover {
    text-shadow: 0px 6px 10px var(--add-color);
  }
`;
