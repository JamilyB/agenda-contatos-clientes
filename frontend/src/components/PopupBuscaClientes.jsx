import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PopupBuscaClientes({ onClose }) {
  const [termoBusca, setTermoBusca] = useState("");
  const [tipoBusca, setTipoBusca] = useState("cpf");
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();

  const handleBuscar = async () => {
    if (!termoBusca.trim()) {
      setErro("Digite um CPF ou Nome para buscar.");
      return;
    }

    try {
      const url = `http://localhost:8080/api/${tipoBusca}?${tipoBusca}=${encodeURIComponent(termoBusca)}`;
      const response = await axios.get(url);

      if (response.data && Object.keys(response.data).length > 0) {
        setResultado(response.data);
        setErro(null);
      } else {
        setResultado(null);
        setErro("Cliente não encontrado.");
      }
    } catch (error) {
      setResultado(null);
      setErro("Erro ao buscar cliente.");
      console.error("Erro na busca:", error);
    }
  };

  const handleVisualizar = (cliente) => {
    localStorage.setItem('clienteSelecionado', JSON.stringify(cliente));

    if (window.location.pathname === "/cadastro") {
      window.location.reload();
    } else {
      navigate('/cadastro');
    }

    onClose();
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center position-fixed w-100 h-100"
      style={{
        top: 0,
        left: 0,
        background: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050, // Garante que fique acima de tudo
      }}
    >
      <div
        className="bg-white p-4 rounded shadow col-md-8"
        style={{
          maxWidth: "50%", 
          textAlign: "center",
          position: "relative",
        }}
      >
        <h2 className="text-center">Buscar Cliente</h2>

        <div className="mb-3">
          <label className="fw-bold">Buscar por:</label>
          <select className="form-control" value={tipoBusca} onChange={(e) => setTipoBusca(e.target.value)}>
            <option value="cpf">CPF</option>
            <option value="nome">Nome</option>
          </select>
        </div>

        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder={`Digite o ${tipoBusca}`}
            value={termoBusca}
            onChange={(e) => setTermoBusca(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-between">
          <button className="btn btn-primary w-50 me-2" onClick={handleBuscar}>
            Buscar
          </button>
          <button className="btn btn-danger w-50 ms-2" onClick={onClose}>
            Fechar
          </button>
        </div>

        {erro && <p className="text-danger mt-3 text-center">{erro}</p>}

        {resultado && (
          <div className="mt-3 text-center">
            <h4 className="fw-bold">Resultado:</h4>
            <p>Nome: {resultado.nome}</p>
            <button className="btn btn-success" onClick={() => handleVisualizar(resultado)}>
              Visualizar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default PopupBuscaClientes;
