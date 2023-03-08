import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaPlus, FaFileExport } from 'react-icons/fa';
import './NavigationBar.css'

const NavigationBar = ({ onAddNoteClick, onExportNotesClick }) => {
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="#home">Minhas Notas</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Item>
            <Button variant="primary" onClick={onAddNoteClick}>
              <FaPlus /> Adicionar Nota
            </Button>
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item>
            <Button variant="outline-primary" onClick={onExportNotesClick}>
              <FaFileExport /> Exportar Notas
            </Button>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
