import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListContato from './ListContato';

function FormContato({ clienteId }) {
  const [contatos, setContatos] = useState([]);
  const [novoContato, setNovoContato] = useState({ valor: '', tipoContato: '', observacao: '' });

  useEffect(() => {
    if (clienteId) {
      axios.get(`http://localhost:8080/contatos?clienteId=${clienteId}`)
        .then(response => setContatos(response.data))
        .catch(error => console.error("Erro ao buscar contatos:", error));
    }
  }, [clienteId]);

  const handleChange = (event) => {
    setNovoContato({ ...novoContato, [event.target.name]: event.target.value });
  };

  const handleTipoContato = (tipo) => {
    setNovoContato({ ...novoContato, tipoContato: tipo });
  };

  const adicionarContato = () => {
    if (!clienteId) {
      alert("Cadastre o cliente antes de adicionar um contato.");
      return;
    }
    axios.post(`http://localhost:8080/contatos/${clienteId}`, novoContato)
      .then(response => {
        setContatos([...contatos, response.data]);
        setNovoContato({ valor: '', tipoContato: '', observacao: '' });
      });
  };

  return (
    <div className="card p-3">
      {/* Formulário de adicionar contato */}
      <h2>Adicionar Contato</h2>
      <div className="input-group mb-3">
        <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {novoContato.tipoContato || "Escolha o tipo"}
        </button>
        <ul className="dropdown-menu">
          <li><button className="dropdown-item" onClick={() => handleTipoContato("Telefone")}>Telefone</button></li>
          <li><button className="dropdown-item" onClick={() => handleTipoContato("Email")}>Email</button></li>
          <li><button className="dropdown-item" onClick={() => handleTipoContato("WhatsApp")}>WhatsApp</button></li>
          <li><hr className="dropdown-divider" /></li>
          <li><button className="dropdown-item" onClick={() => handleTipoContato("Outro")}>Outro</button></li>
        </ul>
        <input type="text" className="form-control" aria-label="Text input with dropdown button" name="valor" value={novoContato.valor} onChange={handleChange} />
      </div>
      <div className="input-group mb-3">
        <label className="input-group-text" htmlFor="observacao">Observação</label>
        <input type="text" className="form-control" id="observacao" name="observacao" value={novoContato.observacao} onChange={handleChange} />
      </div>
      <div className="d-flex justify-content-end">
        <button className="btn btn-primary" onClick={adicionarContato}>Adicionar</button>
      </div>

      <h3 className="mt-4">Lista de Contatos</h3>
      <ListContato clienteId={clienteId} contatos={contatos} setContatos={setContatos} />
    </div>
  );
}

export default FormContato;
