import { Outlet } from 'react-router-dom';
//NavLink,

import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

// import { Suspense } from 'react';

// import {
//   Container,
//   StyledLink,
//   NavContainer,
//   NavList,
//   NavItem,
// } from './SharedLayout.styled.js';
// import Loader from './loader/Loader.jsx';

import Navigation from './navigation/Navigation';
import AuthMenu from './authMenu/AuthMenu';
import UserMenu from './userMenu/UserMenu';

const SharedLayout = () => {
  const isLogin = useSelector(authSelectors.selectIsLogin);

  return (
    <div>
      <header>
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthMenu />}
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;

/**
 * <Container>
      <header>
        <NavContainer>
          <NavList>
            <NavItem>
              <StyledLink to="/">Home</StyledLink>
            </NavItem>
            <NavItem>
              <StyledLink to="/movies">Movies</StyledLink>
            </NavItem>
          </NavList>
        </NavContainer>
      </header>

      <main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </main>      
    </Container>
 */

/* <header>
        <nav>
          <ul
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              margin: '0 auto',
            }}
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            {!isLogin && (
                <li>
                  <NavLink to="/register">Sing Up</NavLink>
                </li>
              ) && (
                <li>
                  <NavLink to="/login">Log In</NavLink>
                </li>
              )}
            {isLogin && (
              <li>
                <UserMenu />
              </li>
            )}
          </ul>
        </nav>
      </header> */
