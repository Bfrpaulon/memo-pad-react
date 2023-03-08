import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import NavigationBar from './components/NavigationBar/NavigationBar';
import SearchBar from './components/SearchBar/SearchBar';
import NoteList from './components/ NoteList/NoteList';
import NotePreview from 'src/components/NotePreview';
import NoteDetails from './components/ NoteDetails';
import NoteForm from './components/NoteForm/NoteForm';
import TagList from './components/TagList/TagList';
import ExportOptions from './components/ExportOptions/ExportOptions';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredNotes, setFilteredNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleUpdateNote = (updatedNote) => {
    const updatedNotes = notes.map((note) =>
      note.id === updatedNote.id ? updatedNote : note
    );
    setNotes(updatedNotes);
    setSelectedNote(updatedNote);
  };

  const handleDeleteNote = (noteId) => {
    const filteredNotes = notes.filter((note) => note.id !== noteId);
    setNotes(filteredNotes);
    setSelectedNote(null);
  };

  const handleSearch = (searchQuery) => {
    setSearchQuery(searchQuery);
    const filteredNotes = notes.filter(
      (note) =>
        note.title.toLowerCase().includes(searchQuery) ||
        note.tags.join(',').toLowerCase().includes(searchQuery)
    );
    setFilteredNotes(filteredNotes);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    setFilteredNotes([]);
  };

  return (
    <Container>
      <NavigationBar />
      <Row className="my-3">
        <Col md={8}>
          <SearchBar
            searchQuery={searchQuery}
            handleSearch={handleSearch}
            handleClearSearch={handleClearSearch}
          />
          {selectedNote ? (
            <>
              <NoteDetails
                note={selectedNote}
                onUpdateNote={handleUpdateNote}
                onDeleteNote={handleDeleteNote}
              />
            </>
          ) : (
            <>
              <NoteList
                notes={filteredNotes.length > 0 ? filteredNotes : notes}
                handleNoteSelect={setSelectedNote}
              />
              <NotePreview />
            </>
          )}
        </Col>
        <Col md={4}>
          <NoteForm
            onAddNote={handleAddNote}
            onUpdateNote={handleUpdateNote}
            selectedNote={selectedNote}
            selectedImage={selectedImage}
            onImageSelect={setSelectedImage}
          />
          <TagList />
          <ExportOptions />
        </Col>
      </Row>
    </Container>
  );
};

export default App;
