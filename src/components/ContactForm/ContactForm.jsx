import { Component } from 'react';
import { nanoid } from 'nanoid';
import {
  PhonebookForm,
  InputWrap,
  ContactLabel,
  ContactInput,
  ContactAddBtn,
} from './ContactForm.styled';

const INITIAL_STATE = {
  name: '',
  number: '',
};

export class ContactForm extends Component {
  state = INITIAL_STATE;

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };
    this.props.handleAddContact(newContact, this.state);
    this.setState(INITIAL_STATE);
  };

  render() {
    return (
      <PhonebookForm onSubmit={this.handleSubmitForm}>
        <InputWrap>
          <ContactInput
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain up to 16 letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Comte d'Artagnan"
            maxLength="16"
            autoComplete="off"
            value={this.state.name}
            onChange={this.handleInput}
            required
          />
          <ContactLabel>Name</ContactLabel>
        </InputWrap>

        <InputWrap>
          <ContactInput
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number may contain 5-16 digits, spaces, dashes, parentheses and can start with +"
            maxLength="16"
            autoComplete="off"
            value={this.state.number}
            onChange={this.handleInput}
            required
          />
          <ContactLabel>Number</ContactLabel>
        </InputWrap>

        <ContactAddBtn type="submit">Add contact</ContactAddBtn>
      </PhonebookForm>
    );
  }
}
