import { Outlet } from 'react-router-dom';

import ContactForm from '../components/contactForm/ContactForm';
import Filter from '../components/filter/Filter';
import ContactList from '../components/contactList/ContactList';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />

      <Outlet />
    </>
  );
};

export default ContactsPage;
