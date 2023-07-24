import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/contacts/contactSelectors';
import { deleteContact, fetchContacts } from 'redux/contacts/contactOperation';
import { useEffect } from 'react';

import { ImPushpin, ImCross } from "react-icons/im";
import { ListContainer, ListItem, ListBtn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onDeleateButton = contact => dispatch(deleteContact(contact.id));

  return (
    <ListContainer>
      {filteredContacts.map(contact => (
        <ListItem key={contact.id}>
          <div>
            <ImPushpin /> <span>{contact.name}:</span>{' '}
            <span>{contact.number}</span>
          </div>
          <ListBtn type="button" onClick={() => onDeleateButton(contact)}>
            <ImCross /> delete contact
          </ListBtn>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default ContactList;
