import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import Navigation from './navigation/Navigation';
import AuthMenu from './authMenu/AuthMenu';
import UserMenu from './userMenu/UserMenu';

import { Container, Header, Main } from './SharedLayout.styled';

const SharedLayout = () => {
  const isLogin = useSelector(authSelectors.selectIsLogin);

  return (
    <Container>
      <Header>
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthMenu />}
      </Header>

      <Main>
        <Outlet />
      </Main>
    </Container>
  );
};

export default SharedLayout;
