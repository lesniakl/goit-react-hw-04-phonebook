import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';

export default class Filter extends Component {
  render() {
    return (
      <>
        <label htmlFor="filterInput" className={css.filterLabel}>
          Find contacts by name
        </label>
        <input
          type="text"
          className={css.filterInput}
          id="filterInput"
          value={this.props.filter}
          onChange={this.props.onFilterChange}
        />
      </>
    );
  }
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
