import { useEffect, useState } from 'react'
import InputsDashboard from '../../components/Inputs-Dashboard/InputsDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
import ImageUpload from '../../components/ImageUpload/ImageUpload'
import SaveSvg from '../../assets/save'
import { setPreviewInputs } from '../../redux/slice/inputsSlice'

const Dashboard = () => {
  const userState = useSelector(state => state.userState)
  const navigate = useNavigate()
  const inputButtons = [
    { name: 'Nombre', id: 'name', type: 'text' },
    { name: 'Correo', id: 'email', type: 'email' },
    { name: 'Celular', id: 'tel', type: 'tel' },
    { name: 'Fecha', id: 'date', type: 'text' },
    { name: 'DNI', id: 'number', type: 'number' }
  ]
  const [arrayInputs, setArrayIputs] = useState([])
  const disaptch = useDispatch()
  const inputState = useSelector(state => state.inputsState)
  console.log(inputState)

  useEffect(() => {
    if (inputState.preview.length > 0) {
      setArrayIputs(inputState.preview)
    }
  }, [])

  useEffect(() => {
    if (userState.verified === false) {
      navigate('/register/verified')
    } else if (userState.verified === null) {
      navigate('/')
    }
  }, [])

  const handleSetInput = (e) => {
    const { id } = e.target
    const existeInput = arrayInputs.find(ele => ele.id === id)
    if (!existeInput) {
      // findButton es un objeto encontrado en inputButtons
      const findButton = inputButtons.find(ele => ele.id === id)
      setArrayIputs([
        ...arrayInputs,
        findButton
      ])
      disaptch(setPreviewInputs([
        ...arrayInputs,
        findButton
      ]))
    }
  }

  const deleteInput = (id) => {
    console.log(arrayInputs)
    const filterInput = arrayInputs.filter(ele => ele.id !== id)
    console.log(filterInput, 'esto es filterInput')
    setArrayIputs(filterInput)
    disaptch(setPreviewInputs(filterInput))
  }

  const handleGetAllInputs = (inputs) => {
    navigate('/preview')
  }

  return (
    <section className='section-dashboard'>
      <button className='prevista-section' onClick={handleGetAllInputs}>Vista Previa</button>
      <button className='guardar-section' onClick={handleGetAllInputs}>
        <SaveSvg />
        Guardar
      </button>
      <div className='buttonsInputs-dashboard'>
        <h1 className='tittle-selectButton-dashboard'>Seleccionar las entradas que iran en el formulario</h1>
        <div className='containerButtos-dashboard'>
          {inputButtons.map((e, i) => {
            return (
              <div className='button-container-dashboard' key={i}>
                <button id={e.id} onClick={handleSetInput} className='buttons-dashboard'>{e.name}</button>
              </div>
            )
          })}
        </div>
        <img src='assets/profile.svg' alt='profile' style={{ width: '80%', marginTop: '10px' }} />
      </div>
      <div className='selectedInputs-dashboard'>
        <div style={{ overflowY: 'auto' }}>
          <div className='marcaUsuario-dashboard'>
            <ImageUpload />
          </div>
          <InputsDashboard arrayInputs={arrayInputs} deleteInput={deleteInput} />
          <div className='buttonContainer-dashboard'>
            <button className='button-dasboard'>Enviar</button>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Dashboard

// "curl https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload -X POST --data 'file=<FILE>&timestamp=<TIMESTAMP>&api_key=<API_KEY>&signature=<SIGNATURE>'"
