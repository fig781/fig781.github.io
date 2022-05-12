import styles from '../../styles/ArticleSearch.module.css';
import ArticleSearchDropdown from './ArticleSearchDropdown';

import { useState } from 'react';

const ArticleSearch = ({ filter, tagOptions, sortOptions }) => {
  const [input, setInput] = useState('');
  const [tag, setTag] = useState('Tag');
  const [sort, setSort] = useState('Sort');

  const typeEvent = (typedInput) => {
    setInput(typedInput);
    filter(typedInput, tag, sort);
  };

  const resetClicked = () => {
    setTag('Tag');
    setSort('Sort');
    filter(input, 'Tag', 'Latest');
  };

  const filterSelected = (selection, dropdownTitle) => {
    if (dropdownTitle === 'Tag') {
      setTag(selection);
      filter(input, selection, sort);
    } else if (dropdownTitle === 'Sort') {
      setSort(selection);
      filter(input, tag, selection);
    }
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
      <div className={styles.dropdownContainer}>
        <ArticleSearchDropdown
          key={tag}
          defaultTitle='Tag'
          title={tag}
          options={tagOptions}
          filterSelected={filterSelected}
        />
        <ArticleSearchDropdown
          key={sort}
          defaultTitle='Sort'
          title={sort}
          options={sortOptions}
          filterSelected={filterSelected}
        />
        {tag !== 'Tag' || sort !== 'Sort' ? (
          <div
            className='ps-2 border-start d-flex align-items-center'
            onClick={() => resetClicked()}>
            <p className={styles.resetButton}>Reset</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default ArticleSearch;
