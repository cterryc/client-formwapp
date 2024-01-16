import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import { setUserNull } from '../../redux/slice/userSlice'
import { fetchVerifiedEmail } from '../../redux/actions'
import swal from 'sweetalert'

const VerifiedEmail = () => {
  const token = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(state => state.userState)
  console.log(user)

  useEffect(() => {
    console.log('entro a Useffect User')
    if (user.verified) {
      swal('Verificado', 'correcto', 'success')
        .then(response => {
          if (response === true) navigate('/dashboard')
        })
    } else if (user.error) {
      dispatch(setUserNull())
      navigate('/')
    }
  }, [user])
  useEffect(() => {
    dispatch(fetchVerifiedEmail(token))
  }, [])
  return (
    <>
      <h1>Verificando...</h1>
    </>
  )
}

export default VerifiedEmail
