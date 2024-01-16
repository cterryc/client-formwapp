import { DemoContainer } from '@mui/x-date-pickers/internals/demo'
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DatePicker } from '@mui/x-date-pickers/DatePicker'
import { useState } from 'react'

export default function DateSelected () {
  const [value, setValue] = useState(null)

  return (
    <DemoContainer components={['DatePicker']} sx={{ margin: 0 }} size='small'>
      <DatePicker
        value={value}
        onChange={(newValue) => setValue(newValue)}
        size='small'
        sx={{ width: '334px', margin: 0 }}
        label='Selecciona una fecha'
      />
    </DemoContainer>
  )
}
