import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

const Navigation = () => {
  const isLogin = useSelector(authSelectors.selectIsLogin);
  return (
    <nav>
      <NavLink to="/" style={{ marginRight: '20px' }}>
        Home
      </NavLink>
      {isLogin && <NavLink to="/contacts">Contacts</NavLink>}
    </nav>
  );
};

export default Navigation;
