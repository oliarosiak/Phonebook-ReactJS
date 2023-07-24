import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;    

    const user = {
      name: form.elements.name.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
    };

    dispatch(register(user));
    form.reset();
  };

  return (
    
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input type='text' name='name' autoComplete="off" autoFocus required />
        </label>
        <label>
          Email
          <input type='email' name='email' autoComplete="off" required />
        </label>
        <label>
          Password
          <input type="password" name='password' autoComplete="off" required />
        </label>

        <button type="submit">Sign Up</button>
      </form>

    
   
  );
};

export default RegisterForm;
