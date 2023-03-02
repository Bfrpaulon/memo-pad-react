import React from "react";

const ExcluirNota = ({ nota, onExcluir }) => {
    return (
        <button
            className="btn btn-danger"
            onClick={() => onExcluir(nota.id)}
        >
            Excluir
        </button>
    );
};

export default ExcluirNota;
