import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import React from 'react'
import Image from 'next/image';
import styles from '../styles/Nav.module.css'

export default function NavbarComponent() {
  return (
    <Navbar  expand="lg" className={styles.navbar}>
    <Container fluid>
      <Navbar.Brand href="#home">
      <Image src="/images/logo.svg" width={100} height={30} alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Features</Nav.Link>
          <Nav.Link href="#link">Pricing</Nav.Link>
          <Nav.Link href="#resourced">Resources</Nav.Link>
        </Nav>
        <Nav className="ml-auto">
        <Nav.Link href="#resourced" className='my-auto'>Login</Nav.Link>
          <Nav.Link href="#resourced"><Button variant="primary" className={styles.signup}>Sign Up</Button></Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
