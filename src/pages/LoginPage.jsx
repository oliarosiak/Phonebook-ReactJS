import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import LoginForm from 'components/loginForm/LoginForm';
import Loader from 'components/loader/Loader';

const LoginPage = () => {
  return (
    <>
      <LoginForm />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default LoginPage;
