import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import RegisterForm from 'components/registerForm/RegisterFrom';
import Loader from 'components/loader/Loader';

const RegisterPage = () => {
  return (
    <>
      <RegisterForm />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default RegisterPage;
