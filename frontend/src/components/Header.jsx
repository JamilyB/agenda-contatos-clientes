import React, { useState } from "react";
import PopupBuscaClientes from "./PopupBuscaClientes";
import logo from "./logo.png"; 

function Header() {
  const [mostrarPopup, setMostrarPopup] = useState(false);

  return (
    <>
      <header className="bg-purple text-white p-3" style={{ backgroundColor: "#4B0082" }}>
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="d-flex align-items-center">
            <img src={logo} alt="Logo" width="60" height="60" className="me-2" />
            Agenda de Contatos
          </h1>
          <nav>
            <ul className="nav">
              <li className="nav-item">
                <a className="nav-link text-white" href="/clientes">Listar Clientes</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white" href="/cadastro">Cadastrar</a>
              </li>
              <li className="nav-item">
                <button className="btn btn-primary" onClick={() => setMostrarPopup(true)}>
                  Buscar Cliente
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {mostrarPopup && <PopupBuscaClientes onClose={() => setMostrarPopup(false)} />}
    </>
  );
}

export default Header;
