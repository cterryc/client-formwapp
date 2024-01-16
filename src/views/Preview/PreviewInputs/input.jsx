import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import { labelVerify } from './services/labelInput.service'
import { useSelector } from 'react-redux'

export default function InputType ({ error, data, setData, type, id }) {
  const { preview } = useSelector(state => state.inputsState)
  return (
    <div style={{ width: '100%' }}>
      <Box
        sx={{
          '& .MuiTextField-root': { m: 1, width: '100%', margin: 0 }
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          id={id}
          // size='small'
          error={error}
          required
          label={labelVerify(id, preview).name}
          type={type}
          value={data ? (data[id] || '') : ''}
          onChange={(event) => {
            setData({
              ...data,
              [id]: event.target.value
            })
          }}
          sx={{ border: 'none' }}
        />
      </Box>
    </div>
  )
}
