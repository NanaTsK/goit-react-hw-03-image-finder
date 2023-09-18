import React, { Component } from 'react';
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
  render() {
    const { largeImageURL, tags } = this.props;
    return (
      <ModalOverlay onClick={this.closeModal}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}

export default Modal;
