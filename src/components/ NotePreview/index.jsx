import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './NotePreview.css'

const NotePreview = ({ note }) => {
    return (
        <div className="note-preview">
            <h2 className="note-title">{note.title}</h2>
            <p className="note-text">{note.text}</p>
            <div className="note-meta">
                <Link to={`/notes/${note.id}`} className="btn btn-primary mr-2">
                    Read More
                </Link>
                <span className="note-date">{note.date}</span>
            </div>
        </div>
    );
};

NotePreview.propTypes = {
    note: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
    }).isRequired,
};

export default NotePreview;