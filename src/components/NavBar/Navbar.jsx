import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux'
import { setUserNull } from '../../redux/slice/userSlice'

const Navbar = () => {
  const { pathname } = useLocation()
  console.log(pathname)
  const user = useSelector(state => state.userState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(setUserNull())
    navigate('/')
  }

  return (
    <section className='section-navbar'>
      <nav className='nav-navbar'>
        <NavLink to='/'>Marca</NavLink>
        {!user.name
          ? (
            <div className='div-navbar'>
              <NavLink className='login-navbar' to='/login'>Ingresar </NavLink>
              <h3 className='h3-navbar'>/</h3>
              <NavLink className='register-navbar' to='/register'> Registarse</NavLink>
            </div>
            )
          : (
            <div className='div-navbar'>
              {pathname === '/register/verified' ? null : <NavLink className='miCuenta-navbar' to='/dashboard'>Mi cuenta</NavLink>}
              {pathname === '/register/verified' ? null : <h3 className='h3-navbar'>/</h3>}
              <button onClick={handleClick} className='button-logout'>Salir</button>
            </div>
            )}
      </nav>
    </section>
  )
}

export default Navbar
