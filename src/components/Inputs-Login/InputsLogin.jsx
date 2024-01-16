import ShowPass from '../../assets/showPass'
import './InputsLogin.css'
import Warning from '../../assets/warning'
import { useEffect, useRef, useState } from 'react'

const InputLogin = ({ name, type, id, inputChange, warning }) => {
  const refPass = useRef(null)
  const [show, setShow] = useState(null)
  const showPass = show ? 'text' : type
  useEffect(() => {
    if (show !== null) {
      refPass.current.focus()
      // inputRef.current.selectionStart = inputRef.current.selectionEnd = inputRef.current.value.length
      refPass.current.setSelectionRange(refPass.current.value.length, refPass.current.value.length)
    }
  }, [show])
  const showClick = (e) => {
    e.preventDefault()
    setShow(!show)
  }
  return (
    <div className='div-inputlogin'>
      <label name={name} className='label-inputlogin'>{name}:</label>
      <div className='div-input-inputlogin'>
        <input
          id={id}
          ref={refPass}
          type={showPass}
          name={name}
          className={`input-inputlogin ${type === 'password' ? 'pass' : ''}`}
          onChange={inputChange}
        />
        {(type === 'text' && warning)
          ? (<button className='warning-inputlogin'><Warning /></button>)
          : null}
        {type === 'password'
          ? (
            <button onClick={showClick} type='button' className='button-inputlogin'>
              {warning ? <Warning /> : <ShowPass show={show} />}
            </button>)
          : null}
      </div>

    </div>
  )
}

export default InputLogin
