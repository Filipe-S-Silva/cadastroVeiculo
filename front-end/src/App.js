import { useState, useEffect } from 'react'
import './App.css';
import Formulario from './Formulario';
import Tabela from './Tabela';

function App() {

  const veiculo = {
    codigo: 0,
    marca: '',
    modelo: '',
    ano: ''
  }
  const [btnCadastrar, setBtnCadastrar] = useState(true);
  const [veiculos, setVeiculos] = useState([])
  const [objVeiculo, setObjVeiculo] = useState(veiculo)

  useEffect(() => {
    //rota para listar
    fetch('http://localhost:8080/listar')
      .then(retorno => retorno.json())
      .then(retornoConvertido => setVeiculos(retornoConvertido)
      )
  }, [])

  const digitando = (e) => {
    setObjVeiculo({ ...objVeiculo, [e.target.name]: e.target.value })
  }

  //cadastrar
  const cadastrar = () => {
    //rota para cadastro
    fetch('http://localhost:8080/cadastrar', {
      method: "post",
      body: JSON.stringify(objVeiculo),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(retorno => retorno.json())
      .then(retornoConvertido => {
        if (retornoConvertido.mensagem !== undefined) {
          alert(retornoConvertido.mensagem)
        } else {
          setVeiculos([...veiculos, retornoConvertido]);
          alert('Produto cadastrado com sucesso')
          limparFormulario()

        }

      })
  }

  //limpar formulario
  const limparFormulario = () => {
    setObjVeiculo(veiculo);
    setBtnCadastrar(true)
  }

  //selecionar
  const selecionarVeiculo = (indice) => {
    setObjVeiculo(veiculos[indice])
    setBtnCadastrar(false)
  }

  //remover
  const remover = () => {
    //rota para de remoção
    fetch('http://localhost:8080/remover/' + objVeiculo.codigo, {
      method: "delete",

      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(retorno => retorno.json())
      .then(retornoConvertido => {

        //Mesagem do retorno
        alert(retornoConvertido.mensagem);

        //vetor temporario 
        let vetorTemporario = [...veiculos];

        //indice
        let indice = vetorTemporario.findIndex((p) => {
          return p.codigo === objVeiculo.codigo
        })

        //removendo veiculo do vetor
        vetorTemporario.splice(indice, 1);

        //atualizando o vetor de veiculos
        setVeiculos(vetorTemporario);

        //limpando formulario apos o processo
        limparFormulario();


      })
  }

  //alterar
  const alterar = () => {
    //rota para alterar
    fetch('http://localhost:8080/alterar', {
      method: "put",
      body: JSON.stringify(objVeiculo),
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(retorno => retorno.json)
      .then(retornoConvertido => {
        if (retornoConvertido.mensagem !== undefined) {
          alert(retornoConvertido.mensagem);
        } else {

          //mensagem 
          alert("Veiculo alterado com sucesso")

          //vetor temporario 
          let vetorTemporario = [...produtos];

          //indice
          let indice = vetorTemporario.findIndex((p) => {
            return p.codigo === objVeiculo.codigo;
          })

          //alterando veiculo do vetor
          vetorTemporario[indice] = objVeiculo;

          //atualizando o vetor de protudos
          setVeiculos(vetorTemporario)

          //limpando formulario apos o processo
          limparFormulario();
        }
      })
  }

  return (

    <div className="body">

      {/* <p>{JSON.stringify(objVeiculo)}</p> */}

      <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#">
          <img src="logo.jpg" width="60" height="60" className="d-inline-block align-top" />
          <p>Veiculos&Cia</p>
        </a>
      </nav>

      <div>
        <Formulario botao={btnCadastrar} eventoDoTeclado={digitando} cadastrar={cadastrar} obj={objVeiculo} cancelar={limparFormulario} remover={remover} alterar={alterar} />

        <Tabela vetor={veiculos} selecionar={selecionarVeiculo} />
      </div>

    </div>
  );
}

export default App;
