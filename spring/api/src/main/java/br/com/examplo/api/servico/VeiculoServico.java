package br.com.examplo.api.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.examplo.api.modelo.RespostaModelo;
import br.com.examplo.api.modelo.VeiculoModelo;
import br.com.examplo.api.repositorio.VeiculoRepositorio;

@Service
public class VeiculoServico {

    @Autowired
    private VeiculoRepositorio vr;

    // metodo listagem
    public Iterable<VeiculoModelo> listar() {
        return vr.findAll();
    }

    @Autowired
    private RespostaModelo rm;

    // metodo cadastrar
    public ResponseEntity<?> cadastrar(VeiculoModelo vm) {
        if (vm.getModelo().equals("")) {
            rm.setMensagem("O nome do modelo é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (vm.getMarca().equals("")) {
            rm.setMensagem("O nome da marca é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (vm.getAno().equals("")) {
            rm.setMensagem("O ano é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<VeiculoModelo>(vr.save(vm), HttpStatus.CREATED);
        }
    }

    // alterar
    public ResponseEntity<?> alterar(VeiculoModelo vm, String acao) {
        if (vm.getModelo().equals("")) {
            rm.setMensagem("O nome do modelo é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (vm.getMarca().equals("")) {
            rm.setMensagem("O nome da marca é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (vm.getAno().equals("")) {
            rm.setMensagem("O ano é obrigatório");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        } else if (acao.equals("cadastrar")) {
            return new ResponseEntity<VeiculoModelo>(vr.save(vm), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<VeiculoModelo>(vr.save(vm), HttpStatus.OK);
        }
    }

    public ResponseEntity<RespostaModelo> remover(long codigo) {
        vr.deleteById(codigo);

        rm.setMensagem("O produto foi removido com sucesso");
        return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);
    }
}