import { Link, useLocation, useNavigate } from 'react-router-dom'
import InputLogin from '../../components/Inputs-Login/InputsLogin'
import './Login.css'
import { useEffect, useState } from 'react'
import Buttons from '../../components/Inputs-Login/Button/buttons'
import { verifyLoginInputs } from '../../helpers/VerifyInputs'
import mobileImbox from '../../assets/mobileinbox.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorNull, setLoadingNull, setUserNull } from '../../redux/slice/userSlice.js'
import { fetchLogin } from '../../redux/actions.js'
import swal from 'sweetalert'
// import mobileLogin from '../../assets/mobileLogin.svg'
// import mobileAccount from '../../assets/mobileaccount.svg'

const Login = () => {
  const [inputs, setInputs] = useState({
    email: '',
    password: ''
  })
  const [warningEmail, setWarningEmail] = useState(false)
  const [warningPassword, setWarningPassword] = useState(false)
  const user = useSelector(state => state.userState)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    console.log(user)
    if (user.email && user.verified) {
      navigate('/dashboard')
    } else if (user.error) {
      console.log('entro en 2')
      swal(`${user.error}`, '', 'warning')
      dispatch(setErrorNull())
    } else if (user.loading === false && user.email) {
      dispatch(setLoadingNull())
      navigate('/register/verified', { state: inputs })
    }
  }, [user])

  useEffect(() => {
    if (pathname === '/login') {
      dispatch(setUserNull())
    }
  }, [])

  const onChange = (e) => {
    const { id, value } = e.target
    setInputs({
      ...inputs,
      [id]: value
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    // verifica que los inputs cumplan con los caracteres necesarios antes de ser enviados
    const verify = verifyLoginInputs(inputs, setWarningEmail, setWarningPassword)
    if (!verify) {
      inputs.email = inputs.email.toLowerCase()
      dispatch(fetchLogin(inputs)) // preguntando al back si el usuario existe y si esta verificado
    }
  }

  const inputChange = (e) => {
    const { id } = e.target
    if (id === 'email') {
      setWarningEmail(false)
    } else if (id === 'password') {
      setWarningPassword(false)
    }
  }

  return (
    <section className='section-login'>
      <div className='div-inicio-login'>
        <Link to='/' className='link-inicio-login'> {'<'} Inicio</Link>
      </div>
      <section className='section-image-login'>
        <h1 className='section-image-h1-login'><strong>Marca</strong></h1>
        <img src={mobileImbox} alt='mobileinbox.svg' className='image-login' />
      </section>
      <div className='divcontainerform-login'>
        <section className='section-form-login'>
          <header className='header-login'>
            <Link className='link-image-login' to='/'>
              <img src={mobileImbox} alt='mobileinbox.svg' className='header-image-login' />
            </Link>
            <h1>Ingresear</h1>
          </header>
          <form className='form-login' onChange={onChange} onSubmit={onSubmit}>
            <InputLogin
              id='email'
              name='Correo'
              type='text'
              inputChange={inputChange}
              warning={warningEmail}
            />
            <InputLogin
              id='password'
              name='Contraseña'
              type='password'
              warning={warningPassword}
              inputChange={inputChange}
            />
            <Link to='/login/identify' className='password-reset'>!Olvide mi contraseña¡</Link>
            <div className='divbutton-login'>
              {user.loading ? <span className='loader-login' /> : <Buttons name='Ingresar' type='submit' />}
            </div>
          </form>
          <div className='footer-login'>
            <h4 className='h4-footer-login'>Resgitrate <Link to='/register' className='link-footer-login'>aquí</Link>!</h4>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Login
