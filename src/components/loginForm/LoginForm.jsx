import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperation';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  LoginFormContainer,
  LoginFormLabel,
  LoginFormInput,
  LoginFormBtm,
} from './LoginForm.styled';

const LoginForm = () => {
  const schema = yup.object().shape({
    email: yup.string(),
    passwordr: yup.string().min(5).max(10),
  });

  const dispatch = useDispatch();

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(logIn(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <LoginFormContainer>
        <LoginFormLabel htmlFor="email">
          Email
          <LoginFormInput type="email" name="email" autoFocus required />
        </LoginFormLabel>
        <LoginFormLabel htmlFor="password">
          Password
          <LoginFormInput type="password" name="password" required />
        </LoginFormLabel>

        <LoginFormBtm type="submit">Log In</LoginFormBtm>
      </LoginFormContainer>
    </Formik>
  );
};

export default LoginForm;
