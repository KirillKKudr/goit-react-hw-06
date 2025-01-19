import styles from "./Contact.module.css";

export default function Contact({ id, name, number, onDeleteContact }) {
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
      <button
        className={styles.deleteButton}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </div>
  );
}
