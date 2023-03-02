import React, { useState } from "react";

const EditarNota = ({ nota, onSalvar, onCancelar }) => {
  const [titulo, setTitulo] = useState(nota.titulo);
  const [descricao, setDescricao] = useState(nota.descricao);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSalvar({ ...nota, titulo, descricao });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="titulo">Título</label>
        <input
          type="text"
          className="form-control"
          id="titulo"
          value={titulo}
          onChange={(event) => setTitulo(event.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="descricao">Descrição</label>
        <textarea
          className="form-control"
          id="descricao"
          rows="3"
          value={descricao}
          onChange={(event) => setDescricao(event.target.value)}
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary mr-2">
        Salvar
      </button>
      <button className="btn btn-secondary" onClick={() => onCancelar()}>
        Cancelar
      </button>
    </form>
  );
};

export default EditarNota;
