import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function PublicRoute({
  children,
  restricted = false,
  navigateTo = '/',
}) {
  const isLoggedIn = useSelector(authSelectors.selectIsLogin);
  return (
    <>{isLoggedIn && restricted ? <Navigate to={navigateTo} /> : children}</>
  );
}
