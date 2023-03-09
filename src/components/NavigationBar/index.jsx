import React from 'react';
import { BsSearch } from 'react-icons/bs';
import { Navbar, Container, Nav, Form } from 'react-bootstrap';

const NavigationBar = ({ handleSearch }) => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="#home" className="navbar-brand">
          Memo Pad
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navbar-link">
              Home
            </Nav.Link>
            <Nav.Link href="#all-notes" className="navbar-link">
              All Notes
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <SearchBar handleSearch={handleSearch} />
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
