
import login from '../../assets/log-in.svg'
import mailfocus from '../../assets/mail-focus.svg'
import lockfocus from '../../assets/lock-focus.svg'
import eye from '../../assets/eye.svg'

export function Formlogin() {
    return (
       <form className='form-login' >
        <div className='form-login__header'>
            <div className='form-login__header__text-and-icon'>
                <img className='form-login__header__text-and-icon__log-in-img' src={login} alt='log-in'/>
                <h2>Faça seu login</h2>
            </div>
            <div>
                <p>Entre com suas informações de cadastro.</p>
            </div>
        </div>

        <div className='form-login__field-email'>
            <label>
                E-mail
                <img className='form-login__field-email__mail-focus' src={mailfocus}width='20px' height='20px'  />
                <input className='form-login__field-email__input' type="text" placeholder='Digite seu e-mail' />
            </label>
        </div>

        <div className='form-login__field-password' >
            <label>
                Senha
                <img src={lockfocus} className='form-login__field-password__lock' width='20px' height='20px' />
                <input className='form-login__field-password__input' type="password" placeholder='Digite sua senha' />
                <img src={eye} className='form-login__field-password__eye'width='20px' height='20px' />
            </label>
        </div>

        <div className='form-login__checkbox' >
            <input type="checkbox" className="form-login__checkbox__reminder" />
            <p className="form-login__checkbox__remember-if" >Lembre-me</p>
            <p className="form-login__checkbox__forgot-pass" >Esqueci minha senha</p>
        </div>

        <div className='form-login__button' >
            <input className="form-login__button__input" type="button" value="ENTRAR" />
            <p className="form-login__button__register">Não tem uma conta? <strong>Regristre-se</strong></p>
        </div>

       </form>
    );
}