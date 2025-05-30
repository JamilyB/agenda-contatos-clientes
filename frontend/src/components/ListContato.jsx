import React, { useEffect, useState } from 'react';
import axios from 'axios';

function ListContato({ clienteId }) {
  const [listContatos, setListContatos] = useState([]);

  useEffect(() => {
    if (clienteId) {
      axios.get(`http://localhost:8080/contatos?cliente_id=${clienteId}`)
        .then(response => setListContatos(response.data))
        .catch(error => console.error("Erro ao buscar contatos:", error));
    }
  }, [clienteId, listContatos]);

  return (
    <div className="container">
      <div className="row">
        {listContatos.length > 0 ? (
          listContatos.map(contato => (
            <div key={contato.id} className="col-md-10">
              <div className="card p-3 text-center">
                <h5>{contato.valor}</h5>
                <p className="text-muted">Tipo: {contato.tipoContato}</p>
                <p className="text-secondary">Obs: {contato.observacao}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-muted">Nenhum contato cadastrado.</p>
        )}
      </div>
    </div>
  );
}

export default ListContato;
