package com.comerciosa.AgendaContatos.controller;


import com.comerciosa.AgendaContatos.entity.Cliente;
import com.comerciosa.AgendaContatos.service.ClienteService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public Cliente cadastrarCliente(@RequestBody @Valid Cliente cliente){
        return clienteService.create(cliente);
    }

    @PutMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public Cliente editarCliente(@PathVariable("id") Long id, @RequestBody @Valid Cliente cliente) {
        return clienteService.update(id, cliente);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Void> deletarCliente(@PathVariable("id") Long id) {
        clienteService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/clientes")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Cliente> listarClientes(){
        return clienteService.list();
    }

    @GetMapping("/cpf")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Cliente> buscarClienteCpf(@RequestParam String cpf){
        return clienteService.findByCpf(cpf);
    }

    @GetMapping("/nome")
    @CrossOrigin(origins = "http://localhost:3000")
    public Optional<Cliente> buscarClienteNome(@RequestParam String nome){
        return clienteService.findByName(nome);
    }
}
