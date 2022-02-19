import { PropTypes } from 'prop-types';
import React from 'react';
import ImageGalleryItem from '../ImageGallaryItem/ImageGallaryItem';

const ImageGallery = ({ images, onHandleClick }) => (
  <ul className="ImageGallery">
    {images.map(image => (
      <ImageGalleryItem key={image.id} image={image} onHandleClick={onHandleClick} />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
  onHandleClick: PropTypes.func.isRequired,
};

export default ImageGallery;
