import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

class Modal extends Component {
  static propTypes = {
    image: PropTypes.string.isRequired,
    onCloseModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    document.addEventListener('keydown', this.onEscapeClick);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onEscapeClick);
  }

  onEscapeClick = e => {
    if (!e.key === 'Escape') return;

    this.props.onCloseModal();
  };

  onBackdropClick = e => {
    if (e.target !== e.currentTarget) return;

    this.props.onCloseModal();
  };

  render = () => {
    const { image } = this.props;
    return (
      <div className="Overlay" onClick={this.onBackdropClick}>
        <div className="Modal">
          <img src={image} />
        </div>
      </div>
    );
  };
}

export default Modal;
