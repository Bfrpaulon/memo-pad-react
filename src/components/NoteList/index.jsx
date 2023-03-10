import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function NoteList() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Nota 1",
      description: "Descrição da Nota 1",
    },
    {
      id: 2,
      title: "Nota 2",
      description: "Descrição da Nota 2",
    },
    {
      id: 3,
      title: "Nota 3",
      description: "Descrição da Nota 3",
    },
  ]);

  return (
    <Container className="mb-5">
      <Row>
        {notes.map((note) => (
          <Col md={4} key={note.id}>
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{note.title}</h5>
                <p className="card-text">{note.description}</p>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NoteList;
