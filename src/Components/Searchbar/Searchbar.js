import { PropTypes } from 'prop-types';
import React, { Component } from 'react';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  onHandleInput = e => {
    this.setState({ query: e.target.value });
  };

  onHandleSubmit = e => {
    e.preventDefault();
    if (!this.state.query) {
      alert('Empty query');
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render = () => {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onHandleSubmit}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onHandleInput}
            value={this.state.query}
          />
        </form>
      </header>
    );
  };
}

export default Searchbar;
