import { Outlet } from 'react-router-dom';
import LoginForm from 'components/loginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <LoginForm />      

      <Outlet />
    </>
  );
};

export default LoginPage;
