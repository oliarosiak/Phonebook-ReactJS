import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
  RegisterFormFormHeader,
  RegisterFormContainer,
  RegisterFormLabel,
  RegisterFormInput,
  RegisterFormBtm,
} from './RegisterForm.styled';

const RegisterForm = () => {
  const schema = yup.object().shape({
    name: yup.string(),
    email: yup.string(),
    passwordr: yup.string().min(5).max(10),
  });

  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    dispatch(register(values));
    resetForm();
  };

  return (
    <>
      <RegisterFormFormHeader>Create an account</RegisterFormFormHeader>
      <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <RegisterFormContainer autoComplete="off">
          <RegisterFormLabel htmlFor="name">
            Name
            <RegisterFormInput type="text" name="name" autoFocus required />
          </RegisterFormLabel>
          <RegisterFormLabel htmlFor="email">
            Email
            <RegisterFormInput type="email" name="email" required />
          </RegisterFormLabel>
          <RegisterFormLabel htmlFor="password">
            Password
            <RegisterFormInput type="password" name="password" required />
          </RegisterFormLabel>

          <RegisterFormBtm type="submit">Sign Up</RegisterFormBtm>
        </RegisterFormContainer>
      </Formik>
    </>
  );
};

export default RegisterForm;
