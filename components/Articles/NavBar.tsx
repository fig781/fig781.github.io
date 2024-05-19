import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/NavBar.module.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = ({ articleButton }) => {
  return (
    <header className={styles.navBar}>
      <div className={styles.innerContainer}>
        <Link href='/' className={styles.logo}>
          <h3>Aden Eilers</h3>
        </Link>
        {articleButton && (
          <Link href='/articles' passHref>
            <Button className={styles.btn}>Articles</Button>
          </Link>
        )}
      </div>
    </header>
  );
};

export default NavBar;
