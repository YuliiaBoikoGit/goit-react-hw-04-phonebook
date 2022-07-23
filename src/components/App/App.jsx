import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { Container, PageTitle, Title } from "./App.styled";
import { ContactForm } from "components/Contact Form/ContactForm";
import { ContactList } from "components/Contact List/ContactList";
import { Filter } from "components/Filter/Filter";

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contacts')) || []);
  const [filter, setFilter] = useState('');

  const formSubmitHandler = data => {
    const existingContact = contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase());

    if (existingContact) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        name: data.name,
        number: data.number,
        id: nanoid(),
      };

      setContacts(prevState => [contact, ...prevState]);
    };
  };

  const handleFIlterChange = event => {
    setFilter(event.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  };

  const deleteContact = contactID => {
    setContacts(prevState => prevState.filter(contact => contact.id !== contactID));
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

    const filteredContacts = getFilteredContacts();

    return (
      <Container>
        <PageTitle>Phonebook</PageTitle>
        <ContactForm onSubmit={formSubmitHandler} />

        <Title>Contacts</Title>
        <Filter value={filter} onChange={handleFIlterChange} />
        <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
      </Container>
    );
};
