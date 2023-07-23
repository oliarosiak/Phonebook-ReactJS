import { useDispatch } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { logIn } from 'redux/auth/authOperation';

const LoginPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;

    const user = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(logIn(user));
    form.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Password
          <input type="password" name="password" required />
        </label>

        <button type="submit">Log In</button>
      </form>

      <Outlet />
    </>
  );
};

export default LoginPage;
