import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isCurrent = useSelector(authSelectors.selectIsCurrentUser);
  const isLoggedIn = useSelector(authSelectors.selectIsLogin);
  const shouldRedirect = !isLoggedIn && !isCurrent;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

