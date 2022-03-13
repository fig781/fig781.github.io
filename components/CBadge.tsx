import { Badge } from 'react-bootstrap';
import styles from '../styles/CBadge.module.css';

const CBadge = ({ tag }) => {
  return (
    <>
      <Badge className={styles.badge} pill text='dark'>
        {tag}
      </Badge>{' '}
    </>
  );
};

export default CBadge;
