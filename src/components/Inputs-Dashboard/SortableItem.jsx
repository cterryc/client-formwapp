import { useSortable } from '@dnd-kit/sortable'
import { CSS } from '@dnd-kit/utilities'
import './Sortableitem.css'
import EditSvg from '../../assets/edit'
import { useState } from 'react'
import DeleteSvg from '../../assets/delete'
import MoveSvg from '../../assets/move'
import { VscCalendar } from 'react-icons/vsc'
import { MdOutlinePhoneIphone, MdMailOutline } from 'react-icons/md'
import { FaRegAddressCard, FaRegUser } from 'react-icons/fa'

const svgSize = 18

const allItems = [
  { name: 'Nombre', id: 'name', svg: <FaRegUser size={svgSize} color='#474747' /> },
  { name: 'Correo', id: 'email', svg: <MdMailOutline size={svgSize} color='#474747' /> },
  { name: 'Celular', id: 'tel', svg: <MdOutlinePhoneIphone size={svgSize} color='#474747' /> },
  { name: 'Fecha', id: 'date', svg: <VscCalendar size={svgSize} color='#474747' />, date: 'Se desplegara el calendario al seleccionar' },
  { name: 'DNI', id: 'number', svg: <FaRegAddressCard size={svgSize} color='#474747' /> }
]

export default function SortableItem ({ id, deleteInput }) {
  const [svgColorEdit, setSvgColorEdit] = useState('#747474')
  const [svgColorDelete, setSvgColorDelete] = useState('#3d3d3d')
  const [svgColorMove, setSvgColorMove] = useState('#9e9e9e')
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id })

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    zIndex: 12
  }

  const matchItem = allItems.find(ele => ele.id === id)

  const handleTouchStart = () => {
    // Manejar eventos táctiles aquí
  }

  const handleTouchMove = () => {
    // Manejar eventos táctiles aquí
  }

  const handleTouchEnd = () => {
    // Manejar eventos táctiles aquí
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='overlayInputs-item'
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <button
        {...listeners}
        {...attributes}
        className='buttonMove-item'
        onMouseEnter={() => setSvgColorMove('#8b1e5d')}
        onMouseLeave={() => setSvgColorMove('#9e9e9e')}
      >
        <MoveSvg stroke={svgColorMove} />
      </button>
      <button
        className='editButton-item'
        onMouseEnter={() => setSvgColorEdit('green')}
        onMouseLeave={() => setSvgColorEdit('#747474')}
        onClick={() => console.log('true')}
      >
        <EditSvg stroke={svgColorEdit} />
      </button>
      <button
        className='deleteButton-item'
        onClick={() => deleteInput(id)}
        onMouseEnter={() => setSvgColorDelete('red')}
        onMouseLeave={() => setSvgColorDelete('#3d3d3d')}
      >
        <DeleteSvg stroke={svgColorDelete} />
      </button>
      <div className='labelContainer-item'>
        <label className='label-item'>{matchItem.name}: *</label>
      </div>
      <div className='svgContainer-item'>
        <div className='svg-item'>
          {/* <img src={matchItem.svg} alt={matchItem.id} className='svgImage-item' /> */}
          {matchItem.svg}
        </div>
        {id === 'tel' && (
          <select className='country-item'>
            <option className='country-item' value='+51'>
              +51
            </option>
          </select>
        )}

        {id === 'tel' && <img src='/assets/arrowDown.svg' alt='arrowDown' className='arrowDown-item' />}
        <input className='input-item' type='text' placeholder={matchItem.date} />
      </div>
    </div>
  )
}
