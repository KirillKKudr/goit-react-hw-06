import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <li key={id} className={styles.item}>
          <Contact id={id} name={name} number={number} onDeleteContact={onDeleteContact} />
        </li>
      ))}
    </ul>
  );
}
