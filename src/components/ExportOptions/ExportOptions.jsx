import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './ExportOptions.css'
const ExportOptions = () => {
  return (
    <div className="export-options">
      <h4>Exportar notas</h4>
      <div className="export-buttons">
        <button className="export-button" title="Exportar para PDF">
          <FontAwesomeIcon icon={faFilePdf} />
        </button>
        <button className="export-button" title="Exportar para texto">
          <FontAwesomeIcon icon={faFileAlt} />
        </button>
      </div>
    </div>
  );
};

export default ExportOptions;
