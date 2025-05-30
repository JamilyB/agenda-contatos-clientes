package com.comerciosa.AgendaContatos.controller;

import com.comerciosa.AgendaContatos.entity.Contato;
import com.comerciosa.AgendaContatos.service.ContatoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contatos")
public class ContatoController {

    @Autowired
    private ContatoService contatoService;

    @PostMapping("/{clienteId}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Contato> cadastrarContato(@PathVariable Long clienteId, @RequestBody  Contato contato) {
        Contato novoContato = contatoService.create(clienteId, contato);
        return ResponseEntity.status(HttpStatus.CREATED).body(novoContato);
    }

    @DeleteMapping("/{id}")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Void> deletarContato(@PathVariable("id") Long id) {
        contatoService.delete(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/list")
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Contato> listarContatos(){
        return contatoService.list();
    }

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<Contato> listarContatosPorCliente(@RequestParam("cliente_id") Long clienteId) {
        return contatoService.listarContatosPorCliente(clienteId);
    }
}
