import { useSelector } from 'react-redux';
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ onDeleteContact }) {
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filters.name.toLowerCase());

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
