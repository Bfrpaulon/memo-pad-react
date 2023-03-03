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
  const [pesquisa, setPesquisa] = useState('');

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
    <div class="container">
      <div class="row">
        <div class="w-2/6">
          <form className='w-80' onSubmit={handleSubmit}>
            <h2>Criar Nota</h2>
            <div class="form-group">
              <label htmlFor="titulo">Título</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="titulo"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
              />
            </div>
            <div class="form-group">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                class="form-control form-control-lg"
                id="descricao"
                rows="3"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
              ></textarea>
            </div>
            <div class="form-group">
              <label htmlFor="pesquisa">Pesquisar notas</label>
              <input
                type="text"
                class="form-control form-control-lg"
                id="pesquisa"
                value={pesquisa}
                onChange={(event) => setPesquisa(event.target.value)}
              />
            </div>

            <div class="form-group">
              <label htmlFor="imagem">Imagem</label>
              <input
                type="file"
                id="imagem"
                onChange={(event) => setImagem(event.target.files[0])}
              />
            </div>
            <div class="form-group">
              <label htmlFor="audio">Áudio</label>
              <input
                type="file"
                class="form-control-file form-control-sm"
                id="audio"
                onChange={(event) => setAudio(event.target.files[0])}
              />
            </div>
            <div class="form-group">
              <label htmlFor="video">Vídeo</label>
              <input
                type="file"
                id="video"
                onChange={(event) => setVideo(event.target.files[0])}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              <FaSave /> Salvar
            </button>

          </form>
        </div>
        <div class="col-sm-12 col-lg-6">
          {notas.map((nota, index) => (
            <div class="card" key={index}>
              <div class="card-body">
                {nota.editando ? (
                  <div>
                    <div class="form-group">
                      <label htmlFor={`titulo-${index}`}>Título</label>
                      <input
                        type="text"
                        class="form-control form-control-lg"
                        id={`titulo-${index}`}
                        value={nota.titulo}
                        onChange={(event) => {
                          const novasNotas = [...notas];
                          novasNotas[index].titulo = event.target.value;
                          setNotas(novasNotas);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor={`descricao-${index}`}>Descrição</label>
                      <textarea
                        class="form-control form-control-lg"
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
                    <div class="form-group">
                      <label htmlFor={`imagem-${index}`}>Imagem</label>
                      <input
                        type="file"
                        id={`imagem-${index}`}
                        onChange={(event) => {
                          const novasNotas = [...notas];
                          novasNotas[index].imagem = event.target.files[0];
                          setNotas(novasNotas);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor={`audio-${index}`}>Áudio</label>
                      <input
                        type="file"
                        class="form-control-file"
                        id={`audio-${index}`}
                        onChange={(event) => {
                          const novasNotas = [...notas];
                          novasNotas[index].audio = event.target.files[0];
                          setNotas(novasNotas);
                        }}
                      />
                    </div>
                    <div class="form-group">
                      <label htmlFor={`video-${index}`}>Vídeo</label>
                      <input
                        type="file"
                        id={`video-${index}`}
                        onChange={(event) => {
                          const novasNotas = [...notas];
                          novasNotas[index].video = event.target.files[0];
                          setNotas(novasNotas);
                        }}
                      />
                    </div>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => {
                        const novasNotas = [...notas];
                        novasNotas[index].editando = false;
                        setNotas(novasNotas);
                      }}
                    >
                      Salvar
                    </button>
                  </div>
                ) : (
                  <div>
                    <h5 class="card-title">{nota.titulo}</h5>
                    <p class="card-text text-white">{nota.descricao}</p>
                    {nota.imagem && (
                      <img
                        src={URL.createObjectURL(nota.imagem)}
                        alt={`Imagem de ${nota.titulo}`}
                        class="img-fluid mb-2"
                      />
                    )}
                    {nota.audio && (
                      <audio controls>
                        <source src={URL.createObjectURL(nota.audio)} />
                      </audio>
                    )}
                    {nota.video && (
                      <video controls class="mb-2">
                        <source src={URL.createObjectURL(nota.video)} />
                      </video>
                    )}
                    <button onClick={() => handleEdit(index)} className="btn btn-outline-primary">
                      <FaEdit />
                    </button>

                    <button onClick={() => handleDelete(index)} className="btn btn-outline-danger">
                      <FaTrashAlt />
                    </button>

                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Nota;
