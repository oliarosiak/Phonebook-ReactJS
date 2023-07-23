import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operation';
import { selectIsLoading, selectError } from 'redux/selectors';

import {
  Container,
  // MainHeader,
  // SecondHeader,
  LoaderContainer,
} from './App.styled';

import Loader from './loader/Loader';

import SharedLayout from './SharedLayout';
import HomePage from 'pages/HomePage';
import RegisterPage from '../pages/RegisterPage';
import ContactsPage from 'pages/ContactsPage';
import LoginPage from 'pages/LoginPage';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>      
      <LoaderContainer>{isLoading && !error && <Loader />}</LoaderContainer>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;

