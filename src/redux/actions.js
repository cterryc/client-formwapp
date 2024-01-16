import { createAsyncThunk } from '@reduxjs/toolkit'
import { API } from '../helpers/editableApiConfig.js'
import { objectPost } from '../helpers/objetPost.js' //

export const fetchRegister = createAsyncThunk('user/fetchRegister',
  async (inputs, thunkAPI) => {
    const requestOptions = objectPost(inputs) // esto solo retorna un objetoPost
    const response = await fetch(`${API}/register`, requestOptions)
    const data = await response.json()
    const { details } = data
    return details
  }
)

export const fetchLogin = createAsyncThunk('user/fetchLogin',
  async (inputs, thunkAPI) => {
    const requestOptions = objectPost(inputs) // esto solo retorna un objetoPost
    const response = await fetch(`${API}/login`, requestOptions)
    const data = await response.json()
    const { details } = data
    return details
  }
)

export const fetchVerify = createAsyncThunk('user/fetchVerify',
  async (inputs, thunkAPI) => {
    const requestOptions = objectPost(inputs) // esto solo retorna un objetoPost
    const response = await fetch(`${API}/verify`, requestOptions)
    const data = await response.json()
    const { details } = data
    return details
  }
)

export const fetchVerifiedEmail = createAsyncThunk('user/fetchVerifiedEmail',
  async (token, thunkAPI) => {
    const requestOptions = objectPost(token) // esto solo retorna un objetoPost
    const response = await fetch(`${API}/verifiedEmail`, requestOptions)
    const data = await response.json()
    console.log(data, 'esto es token')
    const { details } = data
    return details
  }
)
