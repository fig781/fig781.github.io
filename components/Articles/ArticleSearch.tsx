import styles from '../../styles/ArticleSearch.module.css';
import ArticleSearchDropdown from './ArticleSearchDropdown';

import { Button } from 'react-bootstrap';
import { useState } from 'react';

const ArticleSearch = ({ filter, tagOptions, sortOptions }) => {
  const [input, setInput] = useState('');
  const [tag, setTag] = useState('');
  const [sort, setSort] = useState('');
  const [dropdownTagTitle, setDropdownTagTitle] = useState('Tag');
  const [dropdownSortTitle, setDropdownSortTitle] = useState('Latest')

  const typeEvent = (typedInput) => {
    setInput(typedInput);
    filter(typedInput, tag, sort);
  };

  const resetClicked = () => {
    setTag('')
    setSort('')
    setDropdownTagTitle('Tag');
    setDropdownSortTitle('Latest');
    filter(input, '', '')
  }

  const filterSelected = (selection, dropdownTitle: String) => {
    if (dropdownTitle === 'Tag') {
      setTag(selection)
      filter(input, selection, sort)
    } else if (dropdownTitle === 'Sort') {
      setSort(selection)
      filter(input, tag, selection)
    }
  }

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
        <ArticleSearchDropdown title={dropdownTagTitle} options={tagOptions} filterSelected={filterSelected} />
        <ArticleSearchDropdown title={dropdownSortTitle} options={sortOptions} filterSelected={filterSelected} />
        {
          tag || sort ?
            <div className='ps-2 border-start'>
              <Button onClick={() => resetClicked()}>Reset</Button>
            </div> : null
        }

      </div> */}
    </div>
  );
};

export default ArticleSearch;
