import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import AddNote from './components/AddNote';
import NoteList from './components/NoteList';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';
import './App.css';

function App() {
  const [notes, setNotes] = useState([]);
  const [showAddNote, setShowAddNote] = useState(false);
  const [showEditNote, setShowEditNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [showDeleteNote, setShowDeleteNote] = useState(false);

  const addNote = (note) => {
    setNotes([...notes, note]);
  };

  const editNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  return (
    <div>
      <Header setShowAddNote={setShowAddNote} />
      <Container>
        <AddNote
          showAddNote={showAddNote}
          setShowAddNote={setShowAddNote}
          addNote={addNote}
        />
        <NoteList
          notes={notes}
          setSelectedNote={setSelectedNote}
          setShowEditNote={setShowEditNote}
          setShowDeleteNote={setShowDeleteNote}
        />
        {selectedNote && (
          <>
            <EditNote
              selectedNote={selectedNote}
              editNote={editNote}
              setShowEditNote={setShowEditNote}
            />
            <DeleteNote
              selectedNote={selectedNote}
              deleteNote={deleteNote}
              setShowDeleteNote={setShowDeleteNote}
            />
          </>
        )}
      </Container>
    </div>
  );
}

export default App;
