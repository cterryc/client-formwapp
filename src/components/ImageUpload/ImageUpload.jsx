import { useState } from 'react'
import { API } from '../../helpers/editableApiConfig.js'

const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null)

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0])
  }

  const handleUpload = async () => {
    if (!selectedFile) {
      console.error('Selecciona un archivo antes de subirlo.')
      return
    }

    const formData = new FormData()
    formData.append('image', selectedFile)

    try {
      const response = await fetch(`${API}/upload`, {
        method: 'POST',
        body: formData
      })

      if (response.ok) {
        console.log('Imagen subida con éxito')
      } else {
        console.error('Error al subir la imagen')
      }
    } catch (error) {
      console.error('Error de red:', error)
    }
  }

  return (
    <div>
      <input type='file' onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Imagen</button>
    </div>
  )
}

export default ImageUpload
