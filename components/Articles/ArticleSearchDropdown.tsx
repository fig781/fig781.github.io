import styles from '../../styles/ArticleSearchDropdown.module.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { useState } from 'react'

const ArticleSearchDropdown = ({ title, options, filterSelected }) => {
  const [dropdownTitle, setDropdownTitle] = useState(title);

  const dropdownClicked = (option) => {
    setDropdownTitle(option)
    filterSelected(option, title)
  }

  return (
    <Dropdown className={`me-2 ${dropdownTitle === title && styles.articleDropdown}`}>
      <Dropdown.Toggle id={`dropdown-${title}`}>
        {dropdownTitle}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {
          options.map((option, index) => {
            return <Dropdown.Item key={index} as='button' onClick={() => dropdownClicked(option)}>{option}</Dropdown.Item>
          })
        }
      </Dropdown.Menu>
    </Dropdown>

  );
};

export default ArticleSearchDropdown;
