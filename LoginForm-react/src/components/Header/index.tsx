import LogoImg from '../../assets/logo.png'

export function Header() {
    return(
        <header className='header' >
        <img src={LogoImg} alt="imagem-logo"/>
        </header>
    );
}