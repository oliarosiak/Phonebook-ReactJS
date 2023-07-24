import { Outlet } from 'react-router-dom';
import RegisterForm from 'components/registerForm/RegisterFrom';

const RegisterPage = () => {
  return (
    <>
      <RegisterForm/>

      <Outlet />
    </>
  );
};

export default RegisterPage;