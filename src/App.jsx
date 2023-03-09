import React, { useState } from 'react';
import NavigationBar from './components/NavigationBar';
import NoteList from './components/ NoteList';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleSearch = (searchTerm) => {
    const filteredNotes = notes.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNotes(filteredNotes);
  };

  return (
    <div className="App">
      <NavigationBar handleSearch={handleSearch} />
      <NoteList notes={notes} />
    </div>
  );
};

export default App;
