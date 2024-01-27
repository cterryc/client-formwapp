import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../helpers/editableApiConfig.js'
import { objectPost } from '../helpers/objetPost.js' //

export const postNewForm = createAsyncThunk('inputs/postNewForm',
  async (inputs, thunkAPI) => {
    try {
      const requestOptions = objectPost(inputs) // esto solo retorna un objetoPost
      const response = await fetch(`${API}/form`, requestOptions)
      const data = await response.json()
      console.log(data)
      // const { details } = data
      return data
    } catch (error) {
      return { error }
    }
  }
)

export const getInputsFromDb = createAsyncThunk('inputs/getInputsFromDb',
  async (token, thunkAPI) => {
    const response = await fetch(`${API}/form/token/${token}`)
    const data = await response.json()
    console.log(data)
    const { details } = data
    return details
  }
)

export const getInputsFromByUserId = createAsyncThunk('inputs/getInputsFromByUserId',
  async (userId, thunkAPI) => {
    const response = await fetch(`${API}/form/user/${userId}`)
    const data = await response.json()
    return data
  }
)
