import { useSelector, useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import { addContact, deleteContact } from '../../redux/contactsSlice';
import { changeFilter } from '../../redux/filtersSlice';

export default function App() {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleAddContact = ({ name, number }) => {
    const duplicate = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (duplicate) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact(name, number));
  };

  const handleSearch = e => {
    dispatch(changeFilter(e.target.value.toLowerCase()));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={handleAddContact} />
      <SearchBox value={filter} onChange={handleSearch} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </div>
  );
}

