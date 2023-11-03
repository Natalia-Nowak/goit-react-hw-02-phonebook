import React, { Component } from 'react';
import './ContactList.css';

export default class ContactList extends Component {
  render() {
    return (
      <ul className="contact-list">
        {this.props.contactList
          .filter(contact =>
            contact.name.toLowerCase().includes(this.props.filter.toLowerCase())
          )
          .map(contact => (
            <li className="contact-list-item" key={contact.id}>
              {contact.name}: {contact.number}
              <button
                className="button-list"
                onClick={() => this.props.handleDelete(contact.name)}
              >
                Delete
              </button>
            </li>
          ))}
      </ul>
    );
  }
}
