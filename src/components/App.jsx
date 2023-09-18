import { Component } from 'react';
import { Container } from './index.styled';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { fetchImages } from '../api/pixabay-api';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
// import { Modal } from './Modal/Modal';

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

export class App extends Component {
  state = {
    images: [],
    loadedImages: [], //* All loaded images
    error: false,
    loader: false,
    searchQuery: '',
    // isShowModal: false,
    // imageForModal: '',
    page: 1,
    totalHits: null,
    result: null,
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
        Notify.warning(
          `Sorry, there are no images matching your search query. Please try again.`,
          notifyInit
        );
        return;
      }
      this.setState(prevState => ({
        images: [...prevState.images, ...data.hits],
        result: this.state.page * 12,
        totalHits: data.totalHits,
      }));
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loader: false });
    }
  };

  handleSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  render() {
    const {
      images,
      loader,
      error,
      // isShowModal,
      // imageForModal,
      totalHits,
      result,
    } = this.state;
    const { handleSubmit, getModalPhoto, handleLoadMore } = this;
    // const { handleSubmit, getModalPhoto, getMorePhoto, closeModal } = this;

    return (
      <Container>
        <Searchbar onSubmit={handleSubmit} />
        {images && images.length > 0 && (
          <ImageGallery images={images} getModalPhoto={getModalPhoto} />
        )}
        {loader && <Loader />}
        {error && <p>Oooops! Something went wrong...</p>}
        {images && images.length > 0 && result < totalHits && (
          <Button handleLoadMore={handleLoadMore} />
        )}
      </Container>
    );
  }
}
