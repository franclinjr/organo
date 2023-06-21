import './Colaborador.css'

const Colaborador = ({nome, imagem, cargo, corCard}) => {
    return (
        <div className='colaborador' style={{ backgroundColor: corCard }} >
            <div className='cabeçalho'>
                <img src={imagem} alt={nome}></img>
            </div>
            <div className='rodape'>
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
            </div>
        </div>
    )
}

export default Colaborador