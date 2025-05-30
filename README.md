# 📒 Gerenciador de Contatos

Este projeto é um gerenciador de contatos que permite cadastrar clientes e seus respectivos contatos. Ele foi desenvolvido com **Spring Boot** no backend e **React** no frontend, utilizando um banco de dados **MySQL**.

---

## 🚀 Tecnologias Utilizadas

### Backend:

- **Spring Boot** 3.4.4
- **Java** 17
- **Hibernate**
- **MySQL**
- **Lombok**
- **Maven**

### Frontend:

- **React** 19.1.0
- **React Router DOM** 7.4.1
- **Axios** 1.8.4
- **Bootstrap** 5.3.3

---
## Dependências Spring Boot

- **Spring Boot Starter Web**  
- **Spring Boot Starter Data JPA**  
- **Spring Boot Starter Validation** 
- **Spring Boot DevTools**  
- **Lombok**  


## 📂 Estrutura do Projeto

### Backend (Spring Boot):

- **Controller** → Camada de controle (endpoints da API)
- **Service** → Camada de regra de negócios
- **Repository** → Acesso ao banco de dados
- **Entity** → Modelos das tabelas [Cliente, Contato] do banco

### Frontend (React):

- **components/** → Componentes reutilizáveis
- **pages/** → Páginas principais da aplicação [ListPage e FormPage]

---

## 🛠️ Como Executar o Projeto

### 📌 Pré-requisitos:

- Java 17
- Maven
- MySQL
- Node.js

### 🖥️ Execução do Backend (Spring Boot)

1. Configure o banco de dados no **application.properties**:

   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/agendacontatos
   spring.datasource.username=root
   spring.datasource.password=root
   spring.jpa.hibernate.ddl-auto=create
   ```
2. navegue até a pasta do projeto
  ```bash
cd caminho/AgendaContatos/backend
  ```
3. Execute o projeto:
   ```bash
   mvn spring-boot:run
   ```

### 🌐 Execução do Frontend (React)

1. Acesse a pasta do frontend:
   ```bash
   cd ../frontend
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie a aplicação:
   ```bash
   npm start
   ```