import React from "react";
import PropTypes from "prop-types";
import './Tag.css'

const Tag = ({ tag, handleClick }) => {
  return (
    <span className="tag" onClick={() => handleClick(tag)}>
      {tag}
    </span>
  );
};

Tag.propTypes = {
  tag: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tag;
