import './VerifyRegister.css'
import registerverified from '../../assets/Register-verified.svg'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router'

const VerifyRegister = () => {
  const { userState } = useSelector(state => state)
  const navigate = useNavigate()
  const { state } = useLocation()
  console.log(state)
  useEffect(() => {
    if (userState.verified === false) {
      navigate('/register/verified')
    } else if (userState.verified === null) {
      navigate('/')
    }
  }, [])
  return (
    <section className='section-verifyregister'>
      <div>
        <img src={registerverified} alt='verified' className='image-verifyregister' />
      </div>
      <article className='article-section-verifyregister'>
        <div>
          <h1 className='h1-verifyregister'>Por favor <strong>Verifique</strong> su</h1>
          <h1 className='h1-verifyregister'>Correo Electrónico</h1>
          <h1 className='h1-verifyregister' style={{ color: 'aqua', fontSize: '34px' }}>{userState.email}</h1>
        </div>
        <div>
          <h3 className='h3-verifyregister'>Revisar la casilla <strong>"SPAM"</strong> en caso de no encontrarlo en </h3>
          <h3 className='h3-verifyregister'>"Recibidos / Bandeja de entrada"</h3>
        </div>
      </article>
      <br />
      <h3 className='h3-cerrarventana'>Si ya verifico su correo puede cerrar esta ventana</h3>
    </section>
  )
}

export default VerifyRegister
