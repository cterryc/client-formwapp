import React, { useEffect, useState } from 'react'
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors
} from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy
} from '@dnd-kit/sortable'
import SortableItem from './SortableItem'
import './InputDashboard.css'

export default function InputsDashboard ({ arrayInputs, deleteInput }) {
  const [items, setItems] = useState([])
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates
    })
  )

  useEffect(() => {
    const aux = []
    arrayInputs.forEach(element => {
      aux.push(element.id)
    })
    setItems(aux)
  }, [arrayInputs])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragEnd={handleDragEnd}
    >
      <SortableContext items={items} strategy={verticalListSortingStrategy}>
        {items.map((name) => (
          <SortableItem key={name} id={name} deleteInput={deleteInput} />
        ))}
      </SortableContext>
    </DndContext>
  )

  function handleDragEnd (event) {
    const { active, over } = event

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id)
        const newIndex = items.indexOf(over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }
}
