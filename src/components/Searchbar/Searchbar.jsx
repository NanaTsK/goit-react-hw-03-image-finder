import { Component } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const notifyInit = Notify.init({
  width: '280px',
  position: 'center-center',
  distance: '20px',
  opacity: 0.8,
  fontSize: '20px',
  borderRadius: '50px 10px',
  notiflixIconColor: 'rgba(0,0,0,0.6)',
  pauseOnHover: true,
});

// Notify.success(`xxx`, notifyInit);

const INITIAL_STATE = {
  inputQuery: '',
};

export class Searchbar extends Component {
  state = INITIAL_STATE;

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.inputQuery.trim() === '') {
      Notify.info(`Please, enter your request`, notifyInit);
      return;
    }
    this.props.onSubmit(this.state.inputQuery.trim());
    this.setState(INITIAL_STATE);
  };

  handleInput = e => {
    this.setState({
      inputQuery: e.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <SearchBarHeader>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormBtn className="btn-form" type="submit">
            <AiOutlineSearch />
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.handleInput}
            value={this.state.inputQuery}
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
