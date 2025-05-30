import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FormContato from './FormContato';
import { useLocation } from 'react-router-dom';

function FormCliente() {

  const location = useLocation();
  const clienteInicial = location.state?.cliente || JSON.parse(localStorage.getItem('clienteSelecionado')) || { id: null, nome: '', cpf: '', dataNascimento: '', endereco: '', contatos: [] };

  const [cliente, setCliente] = useState(clienteInicial);
  const [isEditing, setIsEditing] = useState(!!cliente.id);

  useEffect(() => {
    setIsEditing(!!cliente.id); 
  }, [cliente.id]);

  useEffect(() => {
    localStorage.removeItem('clienteSelecionado'); 
  }, []);

  function handleChange(event) {
    setCliente({ ...cliente, [event.target.name]: event.target.value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isEditing) {
      axios.put(`http://localhost:8080/api/${cliente.id}`, cliente).then(response => {
        alert("Cliente atualizado com sucesso!");
      });
    } else {
      axios.post("http://localhost:8080/api", cliente).then(response => {
        const novoCliente = { ...cliente, id: response.data.id };
        setCliente(novoCliente);
        alert("Cliente cadastrado com sucesso!");
      });
    }
  };
 
  
  const handleDelete = () => {
    axios.delete(`http://localhost:8080/api/${cliente.id}`)
      .then(response => {
        setCliente({ id: null, nome: '', cpf: '', dataNascimento: '', endereco: '', contatos: [] });
        localStorage.removeItem('clienteSelecionado');
        alert("Cliente excluído com sucesso!");
      })
      .catch(error => {
        console.error("Erro ao excluir cliente:", error);
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <form onSubmit={handleSubmit}>
            <div className="col-12">
              <div className="input-group input-group-lg">
                <span className="input-group-text text-dark fw-bold">Nome</span>
                <input onChange={handleChange} value={cliente.nome} name="nome" type="text" className="form-control"/>
              </div>
              <br />
              <div className="input-group input-group-lg">
                <span className="input-group-text text-dark fw-bold">CPF</span>
                <input onChange={handleChange} value={cliente.cpf} name="cpf" type="text" className="form-control"/>
              </div>
              <br />
              <div className="input-group input-group-lg">
                <span className="input-group-text text-dark fw-bold">Data de Nascimento</span>
                <input onChange={handleChange} value={cliente.dataNascimento} name="dataNascimento" type="date" className="form-control"/>
              </div>
              <br />
              <div className="input-group input-group-lg">
                <span className="input-group-text text-dark fw-bold">Endereço</span>
                <input onChange={handleChange} value={cliente.endereco} name="endereco" type="text" className="form-control"/>
              </div>
            </div>
            <br />
            <div className="d-grid gap-2">
              <input type="submit" value={isEditing ? "Editar" : "Cadastrar"} className="btn btn-success"/>
              {isEditing && (
                <input type="button" value="Excluir" className="btn btn-danger" onClick={handleDelete}
                />
              )}
            </div>
          </form>
        </div>

        <div className="col-6">
            {cliente.id && <FormContato clienteId={cliente.id} />}
        </div>
      </div>
    </div>
  );
}

export default FormCliente;