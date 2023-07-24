import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ContactForm from '../components/contactForm/ContactForm';
import Filter from '../components/filter/Filter';
import ContactList from '../components/contactList/ContactList';
import Loader from 'components/loader/Loader';

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <Filter />
      <ContactList />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default ContactsPage;
