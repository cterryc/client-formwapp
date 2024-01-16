import { Link, useLocation, useNavigate } from 'react-router-dom'
import InputLogin from '../../components/Inputs-Login/InputsLogin'
import './Register.css'
import { useEffect, useState } from 'react'
import Buttons from '../../components/Inputs-Login/Button/buttons'
import { verifyRegisterInputs } from '../../helpers/VerifyInputs'
import mobileImbox from '../../assets/mobileinbox.svg'
import { useDispatch, useSelector } from 'react-redux'
import { setErrorNull, setLoadingNull, setUserNull } from '../../redux/slice/userSlice'
import { fetchRegister } from '../../redux/actions'
import swal from 'sweetalert'

const Register = () => {
  const user = useSelector(state => state.userState)
  const [warningName, setWarningName] = useState(false)
  const [warningEmail, setWarningEmail] = useState(false)
  const [warningPassword, setWarningPassword] = useState(false)
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    password: ''
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { pathname } = useLocation()

  useEffect(() => {
    if (user.error) {
      swal(`${user.error}`, 'Error de registro', 'warning')
      dispatch(setErrorNull())
    } else if (user.loading === false && user.email) {
      dispatch(setLoadingNull())
      navigate('/register/verified', { state: { ruta: '/register' } })
    }
  }, [user])

  useEffect(() => {
    if (pathname === '/register') {
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

  const onSubmit = (e) => {
    e.preventDefault()

    //  aqui verificamos si los datos ingresados al registrarse cumplen con los requisitos
    const verify = verifyRegisterInputs(inputs, setWarningName, setWarningEmail, setWarningPassword)
    if (!verify) {
      // aqui realizamos una peticion al back para crear la cuenta
      dispatch(fetchRegister(inputs))
    }
  }

  const inputChange = (e) => {
    const { id } = e.target
    if (id === 'name') {
      setWarningName(false)
    } else if (id === 'email') {
      setWarningEmail(false)
    } else if (id === 'password') {
      setWarningPassword(false)
    }
  }
  return (
    <section className='section-register'>
      <div className='div-inicio-login'>
        <Link to='/' className='link-inicio-login'>{'<'} Inicio</Link>
      </div>
      <section className='section-image-register'>
        <h1 className='section-image-h1-register'><strong>Marca</strong></h1>
        <img src={mobileImbox} alt='mobileinbox.svg' className='image-register' />
      </section>
      <div className='divcontainerform-register'>
        <section className='section-form-register'>
          <Link to='/' className='link-image-register'>
            <img src={mobileImbox} alt='mobileinbox.svg' className='header-image-register' />
          </Link>
          <header className='header-register'>
            Registrate
          </header>
          <form className='form-register' onChange={onChange} onSubmit={onSubmit}>
            <InputLogin
              id='name'
              name='Nombre'
              type='text'
              inputChange={inputChange}
              warning={warningName}
            />
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
              inputChange={inputChange}
              warning={warningPassword}
            />
            <div className='divbutton-register'>
              {user.loading ? <span className='loader-register' /> : <Buttons name='Registrarse' type='submit' />}
            </div>
          </form>
          <div className='footer-register'>
            <h4 className='h4-footer-register'>Si ya tienes una cuenta ingresa <Link to='/login' className='link-footer-register'>aquí</Link>!</h4>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Register
