import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactForm.module.css';

export default class ContactForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.onAddContact} className={css.form}>
        <label htmlFor="nameInput">Name</label>
        <input
          type="text"
          id="nameInput"
          name="name"
          className={css.formInput}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <label htmlFor="numberInput">Number</label>
        <input
          type="tel"
          id="numberInput"
          name="number"
          className={css.formInput}
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit" className={css.formButton}>
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};
