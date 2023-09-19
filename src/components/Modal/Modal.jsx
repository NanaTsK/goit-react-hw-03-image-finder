import { Component } from 'react';
import { ModalOverlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModalByEsc);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModalByEsc);
  }

  closeModalByEsc = ({ code }) => {
    if (code === 'Escape') this.props.closeModal();
  };

  closeModal = ({ target, currentTarget }) => {
    if (target === currentTarget) this.props.closeModal();
  };

  preventImageClickClose = e => {
    e.stopPropagation();
  };

  render() {
    const { largeImageURL, tags, closeModal } = this.props;
    return (
      <ModalOverlay onClick={closeModal}>
        <ModalWindow>
          <img
            src={largeImageURL}
            alt={tags}
            onClick={this.preventImageClickClose}
          />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}
