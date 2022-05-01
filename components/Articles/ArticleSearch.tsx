import styles from '../../styles/ArticleSearch.module.css';
import ArticleSearchDropdown from './ArticleSearchDropdown';

import { useState, useEffect } from 'react';

const ArticleSearch = ({ filter }) => {
  const [input, setInput] = useState('');
  const [tag, setTag] = useState('');
  const [sort, setSort] = useState('');

  //runs once on render, but it seems ok
  // useEffect(() => {
  //   filter(input, tag, sort);
  // }, [filter, input, tag, sort]);

  const typeEvent = (typedInput) => {
    setInput(typedInput);
    filter(typedInput, '', '');
  };

  return (
    <div className={styles.container}>
      <input
        className={styles.search}
        type='text'
        placeholder='Start typing to search...'
        value={input}
        onChange={(e) => {
          typeEvent(e.target.value);
        }}
      />
      {/* <div className={styles.dropdownContainer}>
        <ArticleSearchDropdown title='Tags' />
        <ArticleSearchDropdown title='Sort' />
      </div> */}
    </div>
  );
};

export default ArticleSearch;
