import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Contact.module.css';

export default class Contact extends Component {
  render() {
    return (
      <li className={css.contactItem}>
        {this.props.name}: {this.props.number}
        <button
          type="button"
          onClick={this.props.onDelete}
          name={this.props.name}
          className={css.contactButton}
        >
          Delete
        </button>
      </li>
    );
  }
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
