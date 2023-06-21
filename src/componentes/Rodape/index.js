import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape' >
            <div className='links'>
                <a href='https://github.com/franclinjr'><img src="/imagens/github.png"/></a> 
                <a href='https://www.linkedin.com/in/franclin-junior-728310207/'><img src="/imagens/linke.png"/></a> 
                <a href='https://www.instagram.com/franclin.jr/'><img src="/imagens/instagram.png"/></a> 
            </div>
            <img src='/imagens/logo.png' className='logo'/>
            <h5>Desenvolvido por Franclin Junior</h5> 
        </footer>
    )
}

export default Rodape