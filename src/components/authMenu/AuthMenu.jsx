import { NavContainer, StyledNavLink } from './AuthMenu.styled';

const AuthMenu = () => {
  return (
    <NavContainer>
      <StyledNavLink to="/register">Registration</StyledNavLink>
      <StyledNavLink to="/login">Login</StyledNavLink>
    </NavContainer>
  );
};

export default AuthMenu;
