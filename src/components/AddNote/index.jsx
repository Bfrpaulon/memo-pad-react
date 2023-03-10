import React, { useState } from "react";

function AddNote() {
  // aqui vamos utilizar o useState para guardar o título e conteúdo da nota
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <div>
      {/* formulário para adicionar nova nota */}
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Título
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="content" className="form-label">
            Conteúdo
          </label>
          <textarea
            className="form-control"
            id="content"
            rows="3"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Adicionar Nota
        </button>
      </form>
    </div>
  );
}

export default AddNote;
