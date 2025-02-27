package br.com.examplo.api.controle;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import br.com.examplo.api.modelo.RespostaModelo;
import br.com.examplo.api.modelo.VeiculoModelo;
import br.com.examplo.api.servico.VeiculoServico;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;

// import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;



@RestController
// @CrossOrigin(origins = "*")
public class VeiculoControle {
    
    
    @GetMapping("")
    public String rota() {
        return "api funcionando";
    }
    
    
    @Autowired
    private VeiculoServico vs;

    //listagem de veiculos
    @GetMapping("/listar")
    public Iterable<VeiculoModelo> listar() {
        return vs.listar();
    }
    
    @PostMapping("/cadastrar")
    public ResponseEntity<?> casdastrar(@RequestBody VeiculoModelo vm){
        return vs.cadastrar(vm);
    }
    
    @PutMapping("/alterar")
    public ResponseEntity<?> alterar(@RequestBody VeiculoModelo vm){
        return vs.alterar(vm, "alterar");
    }

    @DeleteMapping("/remover/{codigo}")
    public ResponseEntity<RespostaModelo> remover(@PathVariable long codigo){
        return vs.remover(codigo);
    }
    


}