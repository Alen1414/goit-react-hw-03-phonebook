import React, { Component } from 'react';
import Form from 'components/Form';

import Filter from 'components/Filter/Filter';
import ContactsList from 'components/ContactsList/ContactsList';
import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  _;
  // formSubmitHandler = data => {
  //   console.log(data);
  // };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
    console.log(e.currentTarget.filter);
  };
  //--------удаляем елемент который совпадает
  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  //--------добавляем в список контакт(получаем данные и распыляем)
  addContact = ({ name, number }) => {
    console.log(name, number);
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [contact, ...prevState.contacts],
    }));
  };

  // //--------ищем по имени
  // filterSearch = () => {
  //   const { filter, contacts } = this.state;
  //   const normaLize = filter.toLowerCase();
  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normaLize)
  //   );
  // };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />

        <ContactsList
          contacts={this.state.contacts}
          onDeleteContact={this.deleteContact}
          // search={this.filterSearch}
        />
      </div>
    );
  }
}

export default App;

// this.setState(({ contacts }) => ({
//       contacts: contacts.map(contact =>
//         contact.id === contactId
//           ? { ...contact, completed: !contact.compledet }
//           : contact
//       ),
