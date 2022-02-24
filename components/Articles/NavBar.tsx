import Head from 'next/head';
import Link from 'next/link';

import { Navbar, Container, Nav, Form, FormControl, Button } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg='light' expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Aden Eilers</Navbar.Brand>

        <Nav className='me-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
