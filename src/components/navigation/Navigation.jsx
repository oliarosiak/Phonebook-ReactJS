import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';

import { NavContainer, StyledNavLink } from './Navigation.styled';

const Navigation = () => {
  const isLogin = useSelector(authSelectors.selectIsLogin);

  return (
    <NavContainer>
      <StyledNavLink to="/">Home</StyledNavLink>
      {isLogin && <StyledNavLink to="/contacts">Contacts</StyledNavLink>}
    </NavContainer>
  );
};

export default Navigation;
