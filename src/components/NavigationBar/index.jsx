import React from 'react';
import { FaSearch, FaPlus, FaEllipsisH } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function NavigationBar() {
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Memo Pad</span>
        <form className="d-flex">
          <input className="form-control me-2 search-bar" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success search-button" type="submit"><FaSearch /></button>
        </form>
        <div className="nav-buttons">
          <button type="button" className="btn btn-outline-primary add-button"><FaPlus /></button>
          <button type="button" className="btn btn-outline-secondary options-button"><FaEllipsisH /></button>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
