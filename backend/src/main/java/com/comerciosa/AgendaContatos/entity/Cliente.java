package com.comerciosa.AgendaContatos.entity;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Past;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.List;

@Entity
@Table( name= "clientes" )
@AllArgsConstructor //Construtor AllArgs
@NoArgsConstructor //Construtor NoArgs
@Data //getters e setters
public class Cliente {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //banco de dados gera automaticamente o valor da chave primária
    private Long id;

    @NotBlank
    private String nome;
    @NotBlank
    @Column(unique = true)
    private String cpf;

    @Past
    private LocalDate dataNascimento;
    private String endereco;

    @OneToMany(mappedBy = "cliente", cascade = CascadeType.REMOVE)
    @JsonManagedReference
    private List<Contato> contatos;


}
