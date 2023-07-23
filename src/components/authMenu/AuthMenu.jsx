import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <nav>
      <NavLink to="/register">Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default AuthMenu;