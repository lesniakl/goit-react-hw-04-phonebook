import Contact from 'components/Contact/Contact';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';

export default class ContactList extends Component {
  render() {
    return (
      <ul className={css.contactList}>
        {this.props.contacts.map(contact => {
          if (!this.props.filter) {
            return (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={this.props.onDelete}
              />
            );
          }
          const filterLower = this.props.filter.toLowerCase();
          const nameLower = contact.name.toLowerCase();
          if (nameLower.includes(filterLower)) {
            return (
              <Contact
                key={contact.id}
                name={contact.name}
                number={contact.number}
                onDelete={this.props.onDelete}
              />
            );
          }
          return null;
        })}
      </ul>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
  filter: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};
