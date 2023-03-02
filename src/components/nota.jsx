import React, { useState } from "react";
import Nota from "./Nota";
import EditarNota from "./EditarNota";
import ExcluirNota from "./ExcluirNota";

const Notas = () => {
  const [notas, setNotas] = useState([]);

  const handleAdicionarNota = (novaNota) => {
    setNotas([...notas, novaNota]);
  };

  const handleEditarNota = (notaEditada) => {
    const novasNotas = notas.map((nota) => {
      if (nota.id === notaEditada.id) {
        return notaEditada;
      }
      return nota;
    });
    setNotas(novasNotas);
  };

  const handleExcluirNota = (id) => {
    const novasNotas = notas.filter((nota) => nota.id !== id);
    setNotas(novasNotas);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <Nota onAdicionarNota={handleAdicionarNota} />
        </div>
        {notas.map((nota) => (
          <div key={nota.id} className="col-md-4 mb-4">
            <div className="card nota-card">
              <div className="card-body">
                <h5 className="card-title">{nota.titulo}</h5>
                <p className="card-text">{nota.descricao}</p>
                <EditarNota nota={nota} onSalvar={handleEditarNota} />
                <ExcluirNota id={nota.id} onExcluir={handleExcluirNota} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notas;
