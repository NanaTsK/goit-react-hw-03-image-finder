import { Component } from 'react';
import { WrapperForm } from './Searchbar.styled';

export class Searchbar extends Component {
  render() {
    return (
      <WrapperForm>
        <form class="search-form" id="search-form">
          <input
            type="text"
            name="searchQuery"
            autocomplete="off"
            placeholder="Search images..."
          />
          <button class="btn-form" type="submit">
            Search
          </button>
        </form>
      </WrapperForm>
    );
  }
}
