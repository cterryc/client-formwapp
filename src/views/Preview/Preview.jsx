import CountrySelect from './PreviewInputs/CountrySelect'
import './Preview.css'
import { useEffect, useState } from 'react'
import InputType from './PreviewInputs/input'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
// import DateSelected from './PreviewInputs/DateSelected'
import { IoChevronBackOutline } from 'react-icons/io5'

const Preview = () => {
  const [data, setData] = useState(null)
  const [error] = useState(false)
  const [date, setDate] = useState(null)
  // const [number, setNumber] = useState('')
  const { preview } = useSelector(state => state.inputsState)
  const navigate = useNavigate()

  console.log(preview)

  useEffect(() => {
    console.log(data)
  }, [data])

  const goDashboard = () => {
    navigate('/dashboard')
  }

  return (
    <section className='section-preview'>
      <button
        onClick={goDashboard}
        className='button-preview'
      >
        <div>
          <IoChevronBackOutline size={20} />
        </div>
        Seguir editando
      </button>
      <div className='inputs-xample'>
        <span className='vistaPrevia'>
          Esto es una vista previa
        </span>
        {preview.map((input, index) => {
          return input.id === 'tel'
            ? (
              <CountrySelect
                key={index}
                data={date}
                setData={setDate}
                error={error}
              />
              )
            : <InputType
                key={index}
                data={data}
                setData={setData}
                error={error}
                type={input.type}
                id={input.id}
              />
        })}
        {/* <DateSelected /> */}
        <div className='downButton-preview'>
          <button style={{ color: 'white', width: '100%', cursor: 'pointer' }}>
            Enviar WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}

export default Preview
