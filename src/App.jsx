import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FaPlus, FaSearch, FaTags, FaFilePdf } from 'react-icons/fa';

function App() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleAddTag = (tag) => {
    setTags([...tags, tag]);
  };

  const handleExportNotes = (format) => {
    // Código para exportar notas no formato desejado
  };

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>App de Notas</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Notas" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <FaPlus /> Adicionar nota
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <FaFilePdf /> Exportar notas
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              <FormControl type="search" placeholder="Pesquisar notas" className="me-2" aria-label="Search" />
              <Button variant="outline-success">
                <FaSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="mt-3">
        <Row>
          <Col md={3}>
            <h5>Tags</h5>
            <hr />
            <Nav className="flex-column">
              {tags.map((tag, index) => (
                <Nav.Link key={index}>
                  <FaTags color={index % 2 === 0 ? 'blue' : 'green'} /> {tag}
                </Nav.Link>
              ))}
              <Nav.Link>
                <FaPlus /> Adicionar tag
              </Nav.Link>
            </Nav>
          </Col>
          <Col md={9}>
            <h5>Notas</h5>
            <hr />
            {notes.map((note, index) => (
              <div key={index} className="mb-3">
                <h6>{note.title}</h6>
                <p>{note.content}</p>
                {note.image && (
                  <img src={note.image} alt="Imagem da nota" className="img-fluid rounded" />
                )}
                {note.link && (
                  <a href={note.link} target="_blank" rel="noreferrer">
                    {note.link}
                  </a>
                )}
                <div>
                  <Button variant="primary" size="sm">
                    Editar
                  </Button>{' '}
                  <Button variant="danger" size="sm">
                    Excluir
                  </Button>
                </div>
                <hr />
              </div>
            ))}
            <Button variant="primary" onClick={() => handleAddNote({ title: 'Nova Nota', content: '' })}>
              Adicionar nota
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
