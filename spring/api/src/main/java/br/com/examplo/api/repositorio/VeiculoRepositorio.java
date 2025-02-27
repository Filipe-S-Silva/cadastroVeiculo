package br.com.examplo.api.repositorio;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import br.com.examplo.api.modelo.VeiculoModelo;

@Repository
public interface VeiculoRepositorio extends CrudRepository<VeiculoModelo, Long>{
    
}