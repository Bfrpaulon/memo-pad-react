import React, { useState } from 'react';
import { FaTrash, FaPencilAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './NoteDetails.css';

const NoteDetails = ({ note, handleDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(note.title);
  const [text, setText] = useState(note.text);
  const [image, setImage] = useState(note.image);
  const [tags, setTags] = useState(note.tags);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setTitle(note.title);
    setText(note.text);
    setImage(note.image);
    setTags(note.tags);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // update note with new data
    const updatedNote = {
      id: note.id,
      title,
      text,
      image,
      tags,
    };
    // call parent function to update note
    handleUpdate(updatedNote);
    setIsEditing(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case 'title':
        setTitle(value);
        break;
      case 'text':
        setText(value);
        break;
      case 'image':
        setImage(value);
        break;
      case 'tags':
        setTags(value.split(','));
        break;
      default:
        break;
    }
  };

  return (
    <div className="note-details">
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <textarea
              className="form-control"
              name="text"
              value={text}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="image"
              value={image}
              onChange={handleInputChange}
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              name="tags"
              value={tags.join(',')}
              onChange={handleInputChange}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-2">
            Save
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </form>
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.text}</p>
          {note.image && (
            <div className="note-image">
              <img src={note.image} alt={note.title} />
            </div>
          )}
          {note.link && (
            <div className="note-link">
              <a href={note.link} target="_blank" rel="noopener noreferrer">
                {note.link}
              </a>
            </div>
          )}
          <div className="note-tags">
            {note.tags.map((tag) => (
              <span key={tag} className="badge badge-secondary mr-1          ">
                {tag}
              </span>
            ))}
          </div>
          <div className="note-actions">
            <button type="button" className="btn btn-outline-primary mr-2" onClick={handleEdit}>
              <FaPencilAlt /> Edit
            </button>
            <button type="button" className="btn btn-outline-danger" onClick={() => handleDelete(note.id)}>
              <FaTrash /> Delete
            </button>
          </div>
          <div className="note-back">
            <Link to="/" className="btn btn-outline-secondary">
              Back to Notes
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

NoteDetails.propTypes = {
  note: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    image: PropTypes.string,
    link: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUpdate: PropTypes.func.isRequired,
};

export default NoteDetails;
