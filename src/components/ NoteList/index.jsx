import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';
import './NoteList.css'

const NoteList = ({ notes, handleDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <div className="note-card" key={note.id}>
          <h2 className="note-title">{note.title}</h2>
          <p className="note-text">{note.text}</p>
          <div className="note-actions">
            <Link to={`/note/${note.id}`} className="btn btn-primary mr-2">
              View
            </Link>
            <button
              type="button"
              className="btn btn-danger"
              onClick={() => handleDelete(note.id)}
            >
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default NoteList;
