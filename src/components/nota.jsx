import React, { useState } from "react";

function Nota() {
  const [notas, setNotas] = useState([]);

  function adicionarNota(novaNota) {
    setNotas([...notas, novaNota]);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const novoTitulo = event.target.elements.titulo.value;
    const novaDescricao = event.target.elements.descricao.value;
    const novaNota = { titulo: novoTitulo, descricao: novaDescricao };
    adicionarNota(novaNota);
    event.target.reset();
  }

  return (
    <div className="container">
      <h1>Meu Bloco de Notas</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="titulo">Título:</label>
          <input
            type="text"
            className="form-control"
            id="titulo"
            name="titulo"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição:</label>
          <textarea
            className="form-control"
            id="descricao"
            name="descricao"
            rows="3"
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Salvar
        </button>
      </form>
      {notas.length > 0 ? (
        <ul className="list-group mt-3">
          {notas.map((nota, index) => (
            <li className="list-group-item" key={index}>
              <h3>{nota.titulo}</h3>
              <p>{nota.descricao}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-3">Nenhuma nota adicionada ainda</p>
      )}
    </div>
  );
}

export default Nota;
