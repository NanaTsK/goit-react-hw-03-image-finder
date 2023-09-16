import {
  InputWrap,
  ContactLabel,
  ContactInput,
} from '../ContactForm/ContactForm.styled';
// import { FilterForm } from './Filter.styled';

export const Filter = ({ filter, handleFilter }) => {
  return (
    <InputWrap>
      <ContactInput
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        maxLength="16"
        id="filter"
        value={filter}
        onChange={handleFilter}
      />
      <ContactLabel>Find contacts by name</ContactLabel>
    </InputWrap>
  );
};
