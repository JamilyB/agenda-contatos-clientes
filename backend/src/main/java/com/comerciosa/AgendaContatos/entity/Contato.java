package com.comerciosa.AgendaContatos.entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name= "contatos")
@AllArgsConstructor //Construtor AllArgs
@NoArgsConstructor //Construtor NoArgs
@Data //getters e setters
public class Contato {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "cliente_id", nullable = false)
    @JsonBackReference
    private Cliente cliente;

    @NotBlank
    private String tipoContato;
    @NotBlank
    private String valor;

    private String observacao;

}
