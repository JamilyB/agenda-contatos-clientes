import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function ListClientes() {
  const [clientes, setClientes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:8080/api/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error("Erro ao buscar clientes:", error));
  }, []);

  const handleVisualizar = (cliente) => {
    localStorage.setItem('clienteSelecionado', JSON.stringify(cliente)); // Armazena o cliente no localStorage
    navigate('/cadastro');
  };

  return (
    <div className="container mt-4">
      <h2>Lista de Clientes</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Cliente</th>
            <th>CPF</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.length > 0 ? (
            clientes.map(cliente => (
              <tr key={cliente.id}>
                <td>{cliente.nome}</td>
                <td>{cliente.cpf}</td>
                <td>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleVisualizar(cliente)}>
                    Visualizar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center text-muted">Nenhum cliente encontrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListClientes;
