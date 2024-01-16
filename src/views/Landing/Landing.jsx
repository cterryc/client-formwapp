import './Landing.css'
import { useSelector } from 'react-redux'

const Landing = () => {
  const state = useSelector(state => state.userState)
  console.log(state)
  return (
    <article className='article-landing'>
      <h1 className='h1-landing'>Titulo Pgina</h1>
      <div className='div-landing-container'>
        <div className='div-landing-items'>
          <h2 className='h2-landing'>Contenido y demas</h2>
          <h3 className='h3-landing'>Parrafos</h3>
          <h3 className='h3-landing'>Imagenes</h3>
        </div>
      </div>
    </article>
  )
}

export default Landing
