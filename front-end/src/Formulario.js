function Formulario({botao, eventoDoTeclado, cadastrar, obj, cancelar, remover, alterar}) {

    return (
        <form>

            <input type='text' value={obj.marca} onChange={eventoDoTeclado} name="marca" placeholder='Marca' className="form-control" />

            <input type='text' value={obj.modelo} onChange={eventoDoTeclado} name="modelo" placeholder='Modelo' className="form-control" />

            <input type='date' value={obj.ano} onChange={eventoDoTeclado} name="ano" placeholder='Ano' className="form-control" />

            {
    
                botao
                ?
                <input type='button' value='Cadastrar' onClick={cadastrar} className="btn btn-primary" />
                :
                <div>
                <input type='button' value='Alterar' onClick={alterar} className="btn btn-warning" />
                <input type='button' value='Remover' onClick={remover} className="btn btn-danger" />
                <input type='button' value='Cancelar' onClick={cancelar} className="btn btn-secondary" />
                </div>

            }


        </form>

    )
}

export default Formulario;