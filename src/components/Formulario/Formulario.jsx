import React, { useState } from 'react'
import CopyToClipboard from 'react-copy-to-clipboard'
import './Formulario.css'

function Formulario () {
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [copiado, setCopiado] = useState(false)

  const handleCopy = () => {
    setCopiado(true)
  }

  const handleRedirectToWhatsApp = () => {
    // Construye el mensaje de WhatsApp
    const mensaje = `Hola, soy ${nombre} ${apellido}.`
    // Construye la URL de WhatsApp con el mensaje
    // const urlWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`
    const urlWhatsApp = `https://api.whatsapp.com/send?phone=51931557353&text=${encodeURIComponent(mensaje)}`
    // Redirige a WhatsApp
    window.location.href = urlWhatsApp
  }

  return (
    <section className='Section-Formulario'>
      <form className='Formulario'>
        <input
          type='text'
          placeholder='Nombre'
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type='text'
          placeholder='Apellido'
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
        <CopyToClipboard text={`${nombre} ${apellido}`} onCopy={handleCopy}>
          <button>Copiar al portapapeles</button>
        </CopyToClipboard>
        {copiado && <div>¡Copiado al portapapeles!</div>}
        <button onClick={handleRedirectToWhatsApp}>Ir a WhatsApp</button>
      </form>
    </section>
  )
}

export default Formulario
