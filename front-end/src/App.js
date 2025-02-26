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
      body:JSON.stringify(objVeiculo),
      headers:{
        "Content-type": "application/json",
        "Accept": "application/json"
      }
    }
    .then(retorno => retorno.json())
    .then(retornoConvertido =>{
      if(retornoConvertido.mensagem !== undefined){
        alert(retornoConvertido.mensagem)
      } else {
        setVeiculos([...veiculos, retornoConvertido]);
        alert('Produto cadastrado com sucesso')
        limparFormulario()

      }

    })
  }

  //limpar formulario
  const limparFormulario = ()=>{
    setObjVeiculo(veiculo);
  }

  return (

    <div className="">

      <p>{JSON.stringify(objVeiculo)}</p>

      <Formulario botao = {btnCadastrar} eventoDoTeclado = {digitando} cadastrar = {cadastrar} obj = {objVeiculo}/>

      <Tabela vetor={veiculos} />

    </div>
  );
}

export default App;
