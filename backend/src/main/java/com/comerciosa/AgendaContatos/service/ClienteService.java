package com.comerciosa.AgendaContatos.service;

import com.comerciosa.AgendaContatos.entity.Cliente;
import com.comerciosa.AgendaContatos.repository.ClienteRepository;
import com.comerciosa.AgendaContatos.repository.ContatoRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;

    @Autowired
    private ContatoRepository contatoRepository;

    public Cliente create(Cliente cliente) {
        return clienteRepository.save(cliente);
    }

    public Cliente update(Long id, Cliente cliente) {
        if (clienteRepository.existsById(cliente.getId())) {
            return clienteRepository.save(cliente);
        } else {
            throw new RuntimeException("Cliente não encontrado");
        }
    }

    @Transactional
    public void delete(Long id) {
        Cliente cliente = clienteRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Cliente não encontrado!"));

        clienteRepository.delete(cliente);
    }

    public List<Cliente> list() {
        return clienteRepository.findAll(Sort.by("nome").ascending());
    }

    public Optional<Cliente> findByName(String nome){
        return clienteRepository.findByNome(nome);
    }
    public Optional<Cliente> findByCpf(String cpf){
        return clienteRepository.findByCpf(cpf);
    }
}
