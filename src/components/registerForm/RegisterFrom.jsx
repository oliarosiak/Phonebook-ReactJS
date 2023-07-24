import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperation';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
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
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <RegisterFormContainer autoComplete="off">
        <RegisterFormLabel htmlFor="name">
          Name
          <RegisterFormInput
            type="text"
            name="name"            
            autoFocus
            required
          />
        </RegisterFormLabel>
        <RegisterFormLabel htmlFor="email">
          Email
          <RegisterFormInput
            type="email"
            name="email"
            autoComplete="off"
            required
          />
        </RegisterFormLabel>
        <RegisterFormLabel htmlFor="password">
          Password
          <RegisterFormInput
            type="password"
            name="password"
            autoComplete="off"
            required
          />
        </RegisterFormLabel>

        <RegisterFormBtm type="submit">Sign Up</RegisterFormBtm>
      </RegisterFormContainer>
    </Formik>
  );
};

export default RegisterForm;
