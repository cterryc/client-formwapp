import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'
import { countries } from './services/countries.service'
import Box from '@mui/material/Box'
import './CountrySelect.css'
import { useEffect, useState } from 'react'

const CountrySelect = ({ setData, data, error }) => {
  const [errorColor, setErrorColor] = useState('')

  useEffect(() => {
    if (error) {
      setErrorColor('error')
    } else {
      setErrorColor('')
    }
  }, [error])

  console.log(data)

  return (
    <div className={`padre ${errorColor}`}>
      <div className={`first-child ${errorColor}`}>
        <Autocomplete
          freeSolo
          // size='small'
          id='country-select-demo'
          sx={{ width: 150 }}
          options={countries}
          value={data}
          onChange={(event, newValue) => {
            setData(newValue)
          }}
          autoHighlight
          getOptionLabel={(option) => `${option.code} (+${option.phone})`}
          renderInput={(params) => (
            <TextField
              {...params}
              required
              label='País'
              sx={{ border: 'none' }}
              error={error}
            />
          )}
        />
      </div>
      <div className={`second-child ${errorColor}`}>
        <Box
          component='form'
          sx={{
            width: '25ch',
            borderLeft: 'none'
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-controlled'
            // size='small'
            required
            error={error}
            label='Numero'
            type='number'
            value={data ? (data.number || '') : ''}
            onChange={(event) => {
              setData({
                ...data,
                number: event.target.value
              })
            }}
            sx={{ border: 'none' }}
          />
        </Box>
      </div>
    </div>
  )
}

export default CountrySelect
