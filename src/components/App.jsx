import { Component } from 'react';
import { Container } from './index.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api/pixabay-api';

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

/* <Loader/>, <Button/>, <Modal/> */

export class App extends Component {
  state = {
    images: [],
    error: false,
    loader: false,
    searchQuery: '',
    // isShowModal: false,
    // imageForModal: '',
    page: 1,
    // totalHits: null,
    // result: null,
  };

  componentDidUpdate(_, prevState) {
    if (
      prevState.searchQuery !== this.state.searchQuery ||
      prevState.page !== this.state.page
    )
      this.fetchInputImages();
  }

  fetchInputImages = async () => {
    try {
      this.setState({ loader: true });
      const { data } = await fetchImages(
        this.state.searchQuery,
        this.state.page
      );
      if (!data.hits.length) {
        Notify.failure(
          `Sorry, there are no images matching your search query. Please try again.`,
          notifyInit
        );
        return;
      }
      this.setState(prevState => ({
        // images: [...prevState.images, ...data.hits],
        images: data.hits,
        // result: this.state.page * 12,
        // totalHits: data.totalHits,
        //or
        // totalPage: Math.ceil(data.totalHits / 12),
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loader: false });
    }
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] }, this.fetchInputImages);
  };

  render() {
    const {
      images,
      // loader,
      error,
      // isShowModal,
      // imageForModal,
      // totalHits,
      // result,
    } = this.state;
    const { getModalPhoto } = this;
    // const { handleSubmit, getModalPhoto, getMorePhoto, closeModal } = this;

    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        {images && images.length > 0 && (
          <ImageGallery images={images} getModalPhoto={getModalPhoto} />
        )}
        {error && <p>Oooops! Something went wrong...</p>}
      </Container>
    );
  }
}

// import { Component } from 'react';
// import { Container } from './index.styled';
// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';

// const notifyInit = Notify.init({
//   width: '280px',
//   position: 'center-center',
//   distance: '20px',
//   opacity: 0.8,
//   fontSize: '20px',
//   borderRadius: '50px 10px',
//   notiflixIconColor: 'rgba(0,0,0,0.6)',
//   pauseOnHover: true,
// });

// export class App extends Component {
//   state = {
//     contacts: [
//       { id: 'id-1', name: 'Lesya Ukrainka', number: '459-12-56' },
//       { id: 'id-2', name: 'Boris JohnsonUK', number: '443-89-12' },
//       { id: 'id-3', name: 'Taras Shevchenko', number: '645-17-79' },
//       { id: 'id-4', name: 'Crimea BeachClub', number: '227-91-26' },
//     ],
//     filter: '',
//   };

//   handleAddContact = newContact => {
//     const isTrue = this.state.contacts.some(
//       ({ name }) => name === newContact.name
//     );
//     if (isTrue) {
//       Notify.info(
//         `${newContact.name} is already in your Phonebook!`,
//         notifyInit
//       );
//       return;
//     }
//     this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));
//     Notify.success(`${newContact.name} added to your Phonebook!`, notifyInit);
//   };

//   getFilterContacts = () => {
//     const { contacts, filter } = this.state;
//     return contacts.filter(({ name }) =>
//       name.toLowerCase().includes(filter.toLowerCase().trim())
//     );
//   };
//   removeContact = id => {
//     this.setState(prev => ({
//       contacts: prev.contacts.filter(contact => contact.id !== id),
//     }));
//   };

//   handleFilter = ({ target: { value } }) => {
//     this.setState({ filter: value });
//   };

//   render() {
//     const filterContacts = this.getFilterContacts();
//     return (
//       <Container>
//         <h1>Phonebook</h1>
//         <ContactForm handleAddContact={this.handleAddContact} />
//         <h2>Contacts</h2>
//         <Filter filter={this.state.filter} handleFilter={this.handleFilter} />
//         <ContactList
//           contacts={filterContacts}
//           removeContact={this.removeContact}
//         />
//       </Container>
//     );
//   }
// }
