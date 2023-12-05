import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export default class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    if (this.state.contacts.some(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const number = form.elements.number.value;
    const id = nanoid();
    const newContact = {
      id,
      name,
      number,
    };
    const newContacts = [...this.state.contacts, newContact];
    this.setState({ contacts: newContacts });
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    form.reset();
  };

  handleChange = e => {
    this.setState({ filter: e.target.value });
  };

  handleDelete = e => {
    const newContacts = this.state.contacts.filter(
      contact => contact.name !== e.target.name
    );
    this.setState({ contacts: [...newContacts] });
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (!parsedContacts) {
      return;
    }
    this.setState({ contacts: parsedContacts });
  }

  render() {
    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <ContactForm onAddContact={this.handleSubmit} />

        <h2 className={css.title}>Contacts</h2>
        <Filter onFilterChange={this.handleChange} filter={this.state.filter} />
        <ContactList
          contacts={this.state.contacts}
          filter={this.state.filter}
          onDelete={this.handleDelete}
        />
      </div>
    );
  }
}
