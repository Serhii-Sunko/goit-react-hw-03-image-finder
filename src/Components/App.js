import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallary/ImageGallary';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import api from '../api/api';

class App extends Component {
  state = {
    images: [],
    modalImage: null,
    query: '',
    page: 1,
    isModalOpen: false,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.page !== this.state.page) {
      api
        .fetchImages(this.state.query, this.state.page)
        .then(images => this.setState(prev => ({ images: [...prev.images, ...images] })))
        .catch(console.log)
        .finally(() => this.setState({ isLoading: false }));
    }
  }

  onSearchSubmit = query => {
    if (query === this.state.query) return;

    this.setState({ query: query, page: 1, images: [], isModalOpen: false, isLoading: true });
  };

  onLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1, isLoading: true }));
  };

  onHandleClick = largeImage => this.setState({ isModalOpen: true, modalImage: largeImage });

  onCloseModal = () => this.setState({ isModalOpen: false });

  render = () => {
    const { isLoading, isModalOpen, images, modalImage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.onSearchSubmit} />
        {images.length > 0 && <ImageGallery images={images} onHandleClick={this.onHandleClick} />}
        {isModalOpen && <Modal image={modalImage} onCloseModal={this.onCloseModal} />}
        {isLoading && <Loader />}
        {images.length > 0 && !isLoading && <Button onClick={this.onLoadMore} />}
      </>
    );
  };
}

export default App;
