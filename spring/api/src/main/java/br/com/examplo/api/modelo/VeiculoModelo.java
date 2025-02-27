package br.com.examplo.api.modelo;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="veiculos")
@Getter
@Setter
public class VeiculoModelo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long codigo;
    private String marca;
    private String modelo; 
    private String ano; 
}