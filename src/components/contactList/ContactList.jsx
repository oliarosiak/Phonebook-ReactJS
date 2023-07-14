import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operation';

import { ImPushpin, ImCross } from "react-icons/im";
import { ListContainer, ListItem, ListBtn } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

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
