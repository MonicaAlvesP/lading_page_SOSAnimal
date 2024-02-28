import Logo from '../assets/logo.png'

function Header(){
    return(
        <div className='container'>
        <header className='header'>
            <img src={Logo} alt="Logo de Animais" />
            <span>Ajude uma Associação de Proteção aos Animais</span>
        </header>
        </div>
    )
}

export default Header