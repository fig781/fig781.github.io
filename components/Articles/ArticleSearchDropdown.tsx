import styles from '../../styles/ArticleSearchDropdown.module.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

const ArticleSearchDropdown = ({ title }) => {
  return (
    <DropdownButton id='dropdown-item-button' title={title}>
      <Dropdown.Item as='button'>Action</Dropdown.Item>
      <Dropdown.Item as='button'>Another action</Dropdown.Item>
      <Dropdown.Item as='button'>Something else</Dropdown.Item>
    </DropdownButton>
  );
};

export default ArticleSearchDropdown;
