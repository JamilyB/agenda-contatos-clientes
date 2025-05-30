package com.comerciosa.AgendaContatos.repository;

import com.comerciosa.AgendaContatos.entity.Contato;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContatoRepository extends JpaRepository<Contato, Long> {
    List<Contato> findByClienteId(Long id);
}

