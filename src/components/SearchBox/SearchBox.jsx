import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';
import styles from './SearchBox.module.css';

export default function SearchBox() {
  const filter = useSelector(state => state.filters.name);
  const dispatch = useDispatch();

  const handleChange = e => {
    const inputValue = e.target.value.toLowerCase();
    dispatch(changeFilter(inputValue));
  };

  return (
    <div className={styles.searchBox}>
      <label>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={handleChange}
          placeholder="Search contacts..."
          className={styles.input}
        />
      </label>
    </div>
  );
}

