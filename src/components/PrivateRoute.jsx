import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import authSelectors from 'redux/auth/authSelectors';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(authSelectors.selectIsLogin);
  return <>{isLoggedIn ? children : <Navigate to="/login" />}</>;
}
