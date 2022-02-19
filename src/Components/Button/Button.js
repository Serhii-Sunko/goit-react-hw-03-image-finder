import { PropTypes } from 'prop-types';
import React from 'react';

const Button = ({ onClick }) => (
  <button type="button" className="Button" onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;
