import { NavLink } from 'react-router-dom';

const AuthMenu = () => {
  return (
    <nav>
      <NavLink to="/register" style={{marginRight: '20px'}}>Registration</NavLink>
      <NavLink to="/login">Login</NavLink>
    </nav>
  );
};

export default AuthMenu;