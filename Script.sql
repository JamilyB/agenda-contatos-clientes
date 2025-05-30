CREATE DATABASE IF NOT EXISTS agendacontatos;
USE agendacontatos;

-- Criar a tabela de clientes
CREATE TABLE clientes (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    cpf VARCHAR(255) UNIQUE NOT NULL,
    data_nascimento DATE,
    endereco VARCHAR(255)
);

-- Criar a tabela de contatos
CREATE TABLE contatos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    cliente_id BIGINT NOT NULL,
    tipo_contato VARCHAR(255) NOT NULL,
    valor VARCHAR(255) NOT NULL,
    observacao VARCHAR(255),
    FOREIGN KEY (cliente_id) REFERENCES clientes(id) ON DELETE CASCADE
);

-- Inserir dados na tabela clientes
INSERT INTO clientes (nome, cpf, data_nascimento, endereco) 
VALUES 
('João Silva', '123.456.789-00', '1990-05-15', 'Rua A, 123'),
('Maria Souza', '987.654.321-00', '1985-09-23', 'Rua B, 456');

-- Inserir dados na tabela contatos
INSERT INTO contatos (cliente_id, tipo_contato, valor, observacao) 
VALUES 
(1, 'Celular', '(11) 99999-9999', 'Contato principal'),
(1, 'Email', 'joao@email.com', NULL),
(2, 'Telefone', '(21) 98888-8888', 'Somente horário comercial'),
(2, 'Email', 'maria@email.com', NULL);
