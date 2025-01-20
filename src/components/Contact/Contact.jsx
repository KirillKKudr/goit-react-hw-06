import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice'; 
import styles from "./Contact.module.css";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id)); 
  };

  return (
    <div className={styles.item}>
      <p>
        <span role="img" aria-label="user">
          👤
        </span>{" "}
        {name}
      </p>
      <p>
        <span role="img" aria-label="phone">
          📞
        </span>{" "}
        {number}
      </p>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
