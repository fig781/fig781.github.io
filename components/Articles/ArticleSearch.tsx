import styles from '../../styles/ArticleSearch.module.css';
import ArticleSearchDropdown from './ArticleSearchDropdown';

import { useState } from 'react';

const ArticleSearch = () => {
  const [input, setInput] = useState('');

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type='text'
        placeholder='Start typing to search...'
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
      <div className={styles.dropdownContainer}>
        <ArticleSearchDropdown title='Tags' />
        <ArticleSearchDropdown title='Sort' />
      </div>
    </div>
  );
};

export default ArticleSearch;
