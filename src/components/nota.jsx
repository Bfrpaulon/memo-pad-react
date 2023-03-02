import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nota.css';

function Nota() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null); // novo estado para armazenar a imagem selecionada
  const [notas, setNotas] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const novaNota = { titulo: titulo, descricao: descricao, imagem: imagem }; // inclui a imagem na nova nota
    setNotas([...notas, novaNota]);
    setTitulo('');
    setDescricao('');
    setImagem(null); // limpa o estado da imagem
  }

  function handleImagemChange(event) {
    setImagem(event.target.files[0]); // atualiza o estado da imagem com o arquivo selecionado
  }

  return (
    <div className="container-fluid bg-color5 py-5">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <form onSubmit={handleSubmit} className="p-4">
            <h2 className="text-center">Criar Nota</h2>
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
            <div className="form-group">
              <label htmlFor="imagem">Imagem</label>
              <input
                type="file"
                className="form-control-file"
                id="imagem"
                accept="image/*"
                onChange={handleImagemChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
        </div>
        <div className="col-md-6 col-lg-8">
          <div className="mt-4">
            {notas.map((nota, index) => (
              <div key={index} className="nota-card mb-3 p-3">
                <h3>{nota.titulo}</h3>
                <p>{nota.descricao}</p>
                {nota.imagem && <img src={URL.createObjectURL(nota.imagem)} alt="Imagem da nota" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nota;
