package com.comerciosa.AgendaContatos.service;


import com.comerciosa.AgendaContatos.entity.Cliente;
import com.comerciosa.AgendaContatos.entity.Contato;
import com.comerciosa.AgendaContatos.repository.ClienteRepository;
import com.comerciosa.AgendaContatos.repository.ContatoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;

@Service
public class ContatoService {

    @Autowired
    ContatoRepository contatoRepository;

    @Autowired
    ClienteRepository clienteRepository;

    public Contato create(Long clienteId, Contato contato) {
        Cliente cliente = clienteRepository.findById(clienteId)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado"));
        contato.setCliente(cliente);
        return contatoRepository.save(contato);
    }

    public void delete(Long id) {
        if (!contatoRepository.existsById(id)) {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Contato não existe");
        }
        contatoRepository.deleteById(id);
    }

    public List<Contato> list() {
        return contatoRepository.findAll();
    }

    public List<Contato> listarContatosPorCliente(Long clienteId) {
        return contatoRepository.findByClienteId(clienteId);
    }
}
