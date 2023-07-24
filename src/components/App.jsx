import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
// import { selectError } from 'redux/contacts/selectors';
import { getCurrentUser } from 'redux/auth/authOperation';
import authSelectors from '../redux/auth/authSelectors';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

import {
  Container,
  // MainHeader,
  // SecondHeader,
  // LoaderContainer,
} from './App.styled';

import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';
// import Loader from './loader/Loader';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(authSelectors.selectIsCurrentUser);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isLoading ? (
    <b>Refreshing user ... </b>
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <PublicRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;