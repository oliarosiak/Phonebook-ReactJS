import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const PublicRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(authSelectors.selectIsLogin);

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
