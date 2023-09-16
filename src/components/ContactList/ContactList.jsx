import { ContactItem } from 'components/ContactItem/ContactItem';
import { ContactBook } from './ContactList.styled';

export const ContactList = ({ contacts, removeContact }) => {
  return (
    <ContactBook>
      <ContactItem
        contacts={contacts}
        removeContact={removeContact}
      ></ContactItem>
    </ContactBook>
  );
};
