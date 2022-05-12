import styles from '../../styles/ArticleSearchDropdown.module.css';
import Dropdown from 'react-bootstrap/Dropdown';

const ArticleSearchDropdown = ({ defaultTitle, title, options, filterSelected }) => {
  return (
    <Dropdown className={`me-2 ${title === defaultTitle && styles.articleDropdown}`}>
      <Dropdown.Toggle id={`dropdown-${defaultTitle}`}>{title}</Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => {
          return (
            <Dropdown.Item
              key={index}
              as='button'
              onClick={() => filterSelected(option, defaultTitle)}>
              {option}
            </Dropdown.Item>
          );
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default ArticleSearchDropdown;
