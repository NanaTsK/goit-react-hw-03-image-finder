import { Component } from 'react';
import {
  SearchBarHeader,
  SearchForm,
  SearchFormBtn,
  SearchFormInput,
} from './Searchbar.styled';
import { AiOutlineSearch } from 'react-icons/ai';

export class Searchbar extends Component {
  render() {
    return (
      <SearchBarHeader>
        <SearchForm>
          <SearchFormBtn className="btn-form" type="submit">
            <AiOutlineSearch />
          </SearchFormBtn>
          <SearchFormInput
            type="text"
            name="searchQuery"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBarHeader>
    );
  }
}
