import { useSelector, useDispatch } from 'react-redux';
import { addContact } from 'redux/operation';
import { selectItems } from 'redux/selectors';
import { Formik } from 'formik';
import * as yup from 'yup';

import { ImCheckmark2 } from 'react-icons/im';
import {
  FormContainer,
  FormLabel,
  FormInput,
  FormErrorMessage,
  FormBtm,
} from './ContactForm.styled';

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      ),
    number: yup
      .string()
      .matches(
        /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,
        'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +. At least 5 symbols'
      )
      .min(5)
      .max(16),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectItems);

  const initialValues = {
    name: '',
    number: '',
  };

  const handleSubmit = (values, { resetForm }) => {
    const checkedName = contacts.find(contact => {
      const nameLower = values.name.toLowerCase();
      const contactNameLower = contact.name.toLowerCase();
      return contactNameLower === nameLower || contact.number === values.number;
    });

    if (checkedName) {
      alert('Such data is already in the phone book');
      return resetForm();
    }

    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <FormContainer autoComplete="off">
        <FormLabel htmlFor="name">
          Name
          <FormInput type="text" name="name" required />
          <FormErrorMessage name="name" component="span" />
        </FormLabel>
        <FormLabel htmlFor="number">
          Number
          <FormInput type="tel" name="number" required />
          <FormErrorMessage name="number" component="span" />
        </FormLabel>
        <FormBtm type="submit">
          <ImCheckmark2 /> add contact
        </FormBtm>
      </FormContainer>
    </Formik>
  );
};

export default ContactForm;
