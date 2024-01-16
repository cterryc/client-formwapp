import CountrySelect from './PreviewInputs/CountrySelect'
import './Preview.css'
import { useEffect, useState } from 'react'
import InputType from './PreviewInputs/input'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import DateSelected from './PreviewInputs/DateSelected'

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
        style={{ display: 'flex', position: 'absolute', left: 30, top: 30, cursor: 'pointer', backgroundColor: 'aqua' }}
      >
        {`${'<'} dashboard`}
      </button>
      <div className='inputs-xample'>
        {preview.map((input, index) => {
          return input.id === 'tel'
            ? (
              <CountrySelect key={index} data={date} setData={setDate} error={error} />
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
        <DateSelected />
      </div>
    </section>
  )
}

export default Preview
