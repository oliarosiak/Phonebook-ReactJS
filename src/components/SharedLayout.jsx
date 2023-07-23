import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import Navigation from './navigation/Navigation';
import AuthMenu from './authMenu/AuthMenu';
import UserMenu from './userMenu/UserMenu';

const SharedLayout = () => {
  const isLogin = useSelector(authSelectors.selectIsLogin);

  return (
    <div>
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          margin: '0 auto',
        }}
      >
        <Navigation />
        {isLogin ? <UserMenu /> : <AuthMenu />}
      </header>

      <main
        style={{
          marginTop: '30px',
        }}
      >
        <Outlet />
      </main>
    </div>
  );
};

export default SharedLayout;