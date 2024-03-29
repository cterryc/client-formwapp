import { useEffect, useState } from 'react'
import InputsDashboard from '../../components/Inputs-Dashboard/InputsDashboard'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import './Dashboard.css'
// import ImageUpload from '../../components/ImageUpload/ImageUpload'
// import SaveSvg from '../../assets/save'
import { setPreviewInputs } from '../../redux/slice/inputsSlice'
import { MdOutlinePhoneIphone } from 'react-icons/md'
import { FaCaretDown } from 'react-icons/fa6'
import { countries } from '../Preview/PreviewInputs/services/countries.service'
import { patchUserTel } from '../../redux/actions'
import { getInputsFromByUserId, postNewForm } from '../../redux/inputsActions'
import swal from 'sweetalert'
import { IoIosShareAlt } from 'react-icons/io'
import { VscOpenPreview } from 'react-icons/vsc'
import { LiaSaveSolid } from 'react-icons/lia'

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
  const [phone, setPhone] = useState(null)
  const [selectValue, setSelectValue] = useState(null)
  const [alert, setAlert] = useState(null)
  const disaptch = useDispatch()
  const { preview, inputsSave } = useSelector(state => state.inputsState)
  console.log(inputsSave)

  const dispatch = useDispatch()

  useEffect(() => {
    // no es bucle, se solicita para renderizar los inputs desde el back al cargar la pagina
    if (preview.length > 0) {
      setArrayIputs(preview)
    }
    dispatch(getInputsFromByUserId(userState.id))
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
    const filterInput = arrayInputs.filter(ele => ele.id !== id)
    setArrayIputs(filterInput)
    disaptch(setPreviewInputs(filterInput))
  }

  const handleGetAllInputs = (inputs) => {
    navigate('/preview')
  }

  // Patch prop tel en user
  const handleOnSubmit = (e) => {
    e.preventDefault()
    if (selectValue && phone) {
      disaptch(patchUserTel({ userId: userState.id, dataToPatch: { tel: { country: selectValue, numberPhone: phone } } }))
    } else {
      if (!selectValue && !phone) {
        setAlert('Complete los espacios')
      } else if (!selectValue) {
        setAlert('Elija Cod. País')
      } else {
        setAlert('Inserte su número')
      }
    }
  }

  const handleSelectChange = (e) => {
    setAlert(null)
    setSelectValue(e.target.value)
  }

  const handlePostSaveInputs = () => {
    dispatch(postNewForm({
      inputs: arrayInputs,
      brand: 'Marca-1',
      avatar: userState.avatar,
      userId: userState.id
    }))
    swal('Guardado', 'Se guardo correctamente', 'success')
  }

  return (
    <section className='section-dashboard'>
      <button className='prevista-section' onClick={handleGetAllInputs}>
        <div style={{ paddingLeft: 2 }}>
          <VscOpenPreview size={20} />
        </div>
        <div style={{ paddingLeft: 3 }}>
          Vista Previa
        </div>
      </button>
      <button className='guardar-section' onClick={handlePostSaveInputs}>
        <div style={{ paddingLeft: 2 }}>
          <LiaSaveSolid size={20} />
        </div>
        <div style={{ paddingLeft: 3 }}>
          Guardar
        </div>
      </button>
      <button className='compartir-section' onClick={handlePostSaveInputs}>
        <div style={{ paddingLeft: 2 }}>
          <IoIosShareAlt size={20} />
        </div>
        <div style={{ paddingLeft: 3 }}>
          Compartir Form
        </div>
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
        {userState.tel
          ? (
            <div style={{ overflowY: 'auto' }}>
              {/* <div className='marcaUsuario-dashboard'>
                <ImageUpload />
              </div> */}
              <InputsDashboard arrayInputs={arrayInputs} deleteInput={deleteInput} />
              <div className='buttonContainer-dashboard'>
                <button className='button-dasboard'>Enviar</button>
              </div>
            </div>
            )
          : (
            <form
              onSubmit={handleOnSubmit}
              style={{
                width: 380,
                color: 'dimgrey',
                gap: 5,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div>
                Ingrese el celular que recibira los mensajes:
              </div>
              <div style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                backgroundColor: '#e9e9e9',
                borderRadius: '5px',
                border: '1px solid #d1d1d1'
              }}
              >
                <div style={{ width: 40 }}>
                  <MdOutlinePhoneIphone size={22} />
                </div>
                <div className='select-container-dashboard'>
                  <select onChange={handleSelectChange} className='selector-dashboard'>
                    <option
                      value={selectValue}
                      defaultValue='Pais'
                    >Cod. país
                    </option>
                    {countries?.map((ele, index) => {
                      const infoEle = `${ele.code} +${ele.phone}`
                      return (
                        <option key={index} value={ele.phone} className='option-selector-dashboard'>{infoEle}</option>
                      )
                    })}
                  </select>
                  <div className='filterArrow-dashboard'>
                    {/* <FlechaAbajo /> */}
                    <FaCaretDown size={30} />
                  </div>
                </div>
                <input
                  style={{
                    padding: '12px 12px 12px 12px',
                    width: '70%',
                    backgroundColor: '#e9e9e9',
                    outline: 'none',
                    borderRadius: '0px 5px 5px 0px',
                    borderLeft: '1px solid #d1d1d1'
                  }}
                  type='text'
                  placeholder='N° Celular'
                  onChange={((e) => {
                    setAlert(null)
                    setPhone(e.target.value)
                  })}
                />
              </div>
              <div style={{ marginTop: '10px', position: 'relative' }}>
                <button
                  type='submit'
                  className='button-submit-dashboard'
                  disabled={alert !== null}
                >{!userState.loading
                  ? <>Continuar</>
                  : <span className='loader' />}
                </button>
                {alert !== null && <span style={{ color: 'red' }}>{alert}</span>}
              </div>
            </form>
            )}
      </div>
    </section>
  )
}
export default Dashboard

// "curl https://api.cloudinary.com/v1_1/<CLOUD_NAME>/image/upload -X POST --data 'file=<FILE>&timestamp=<TIMESTAMP>&api_key=<API_KEY>&signature=<SIGNATURE>'"
