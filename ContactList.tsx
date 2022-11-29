import * as React from 'react';
import ContactItem from './ContactItem';
import './style.css';

export default function ContactList() {
  const contacts = ['Jakub', 'Maria', 'Mateusz'];

  return (
    <ul>
      {contacts.map((contact) => (
        <ContactItem name={contact} />
      ))}
    </ul>
  );
}
