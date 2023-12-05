import React, { useEffect, useState } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { nanoid } from 'nanoid';
import css from './App.module.css';

export default function App() {
  const initialContacts = [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = form.elements.name.value;
    if (contacts.some(contact => contact.name === name)) {
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
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    form.reset();
  };

  const handleChange = e => {
    setFilter(e.target.value);
  };

  const handleDelete = e => {
    const newContacts = contacts.filter(
      contact => contact.name !== e.target.name
    );
    setContacts(newContacts);
    localStorage.setItem('contacts', JSON.stringify(newContacts));
  };

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(savedContacts);
    if (!parsedContacts) {
      return;
    }
    setContacts(parsedContacts);
  }, []);

  return (
    <div className={css.container}>
      <h1 className={css.title}>Phonebook</h1>
      <ContactForm onAddContact={handleSubmit} />

      <h2 className={css.title}>Contacts</h2>
      <Filter onFilterChange={handleChange} filter={filter} />
      <ContactList
        contacts={contacts}
        filter={filter}
        onDelete={handleDelete}
      />
    </div>
  );
}
