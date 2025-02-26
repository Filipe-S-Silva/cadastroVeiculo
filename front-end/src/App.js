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
    fetch('')
      .then(retorno => retorno.json())
      .then(retornoConvertido => setVeiculos(retornoConvertido)
      )
  }, [])

  const digitando = (e) =>{
    setObjVeiculo ({...objVeiculo, [e.target.name]:e.target.value})
  }

  const cadastrar = () =>{
    //rota para cadastro
    fetch(''),{
      method: "post",
      body:Json.stringify(objVeiculo),
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    .then(retorno => retorno.json())
    .then(retornoConvertido =>{
      console.log(retornoConvertido)
    })
  }

  return (

    <div className="">

      <p>{JSON.stringify(objVeiculo)}</p>

      <Formulario botao = {btnCadastrar} eventoDoTeclado = {digitando} cadastrar = {cadastrar}/>

      <Tabela vetor={veiculos} />

    </div>
  );
}

export default App;
