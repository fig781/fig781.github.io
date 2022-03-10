import Head from 'next/head';
import Link from 'next/link';

import styles from '../../styles/NavBar.module.css';
import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = ({ articleButton }) => {
  return (
    <Navbar className={styles.navBar} expand='lg'>
      <Container>
        <Link href='/'>
          <a className={styles.logo}>
            <h3>Aden Eilers</h3>
          </a>
        </Link>
        {articleButton && (
          <Link href='/articles' passHref>
            <Button className={styles.btn}>Articles</Button>
          </Link>
        )}
      </Container>
    </Navbar>
  );
};

export default NavBar;
