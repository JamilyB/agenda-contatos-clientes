import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Header from './components/Header';
import ListPage from './pages/ListPage';  // Página de listagem
import FormPage from './pages/FormPage';  // Página de formulário

const App = () => {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/clientes" element={<ListPage />} />
        <Route path="/cadastro" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
