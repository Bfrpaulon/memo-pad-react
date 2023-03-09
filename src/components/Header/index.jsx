import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

function Header({ setShowAddNote, setShowEditNote }) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>Memo Pad</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setShowAddNote(true)}>Add Note</Nav.Link>
          <Nav.Link onClick={() => setShowEditNote(true)}>
            Edit Note
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
