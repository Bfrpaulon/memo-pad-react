import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Nota.css';
import { FaTrashAlt, FaEdit, FaSave } from 'react-icons/fa';

function Nota() {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState(null);
  const [audio, setAudio] = useState(null);
  const [video, setVideo] = useState(null);
  const [notas, setNotas] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const novaNota = { titulo: titulo, descricao: descricao, imagem: imagem, audio: audio, video: video };
    setNotas([...notas, novaNota]);
    setTitulo('');
    setDescricao('');
    setImagem(null);
    setAudio(null);
    setVideo(null);
  }

  function handleEdit(index) {
    const novasNotas = [...notas];
    novasNotas[index].editando = true;
    setNotas(novasNotas);
  }

  function handleSave(index) {
    const novasNotas = [...notas];
    novasNotas[index].editando = false;
    setNotas(novasNotas);
  }

  function handleDelete(index) {
    const novasNotas = notas.filter((nota, i) => i !== index);
    setNotas(novasNotas);
  }

  return (
    <div className="container container-fluid bg-color5 py-5">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <form onSubmit={handleSubmit} className="nota-form p-4">
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
                onChange={(event) => setImagem(event.target.files[0])}
              />
            </div>
            <div className="form-group">
              <label htmlFor="audio">Áudio</label>
              <input
                type="file"
                className="form-control-file"
                id="audio"
                onChange={(event) => setAudio(event.target.files[0])}
              />
            </div>
            <div className="form-group">
              <label htmlFor="video">Vídeo</label>
              <input
                type="file"
                className="form-control-file"
                id="video"
                onChange={(event) => setVideo(event.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Salvar
            </button>
          </form>
          <div className="nota-list">
            {notas.map((nota, index) => (
              <div key={index} className="nota-card p-4 mb-4 ml-5">
                {nota.editando ? (
                  <div>
                    <div className="form-group">
                      <label htmlFor={`titulo-${index}`}>Título</label>
                      <input
                        type="text"
                        className="form-control"
                        id={`titulo-${index}`}
                        value={nota.titulo}
                        onChange={(event) => {
                          const novasNotas = [...notas];
                          novasNotas[index].titulo = event.target.value;
                          setNotas(novasNotas);
                        }}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`descricao-${index}`}>Descrição</label>
                      <textarea
                        className="form-control"
                        id={`descricao-${index}`}
                        rows="3"
                        value={nota.descricao}
                        onChange={(event) => {
                          const novasNotas = [...notas];
                          novasNotas[index].descricao = event.target.value;
                          setNotas(novasNotas);
                        }}
                      ></textarea>
                    </div>
                    <button
                      className="btn btn-success mr-2"
                      onClick={() => handleSave(index)}
                    >
                      <FaSave /> Salvar
                    </button>
                  </div>
                ) : (
                  <div>
                    <h3>{nota.titulo}</h3>
                    <p>{nota.descricao}</p>
                    {nota.imagem && (
                      <div className="form-group">
                        <img src={URL.createObjectURL(nota.imagem)} alt="" />
                      </div>
                    )}
                    {nota.audio && (
                      <div className="form-group">
                        <audio controls>
                          <source src={URL.createObjectURL(nota.audio)} type="audio/mp3" />
                        </audio>
                      </div>
                    )}
                    {nota.video && (
                      <div className="form-group">
                        <video controls>
                          <source src={URL.createObjectURL(nota.video)} type="video/mp4" />
                        </video>
                      </div>
                    )}
                    <button
                      className="btn btn-primary mr-2"
                      onClick={() => handleEdit(index)}
                    >
                      <FaEdit /> Editar
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(index)}
                    >
                      <FaTrashAlt /> Excluir
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nota;
