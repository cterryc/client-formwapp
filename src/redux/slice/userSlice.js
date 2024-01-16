import { createSlice } from '@reduxjs/toolkit'

import {
  fetchRegister,
  fetchLogin,
  fetchVerifiedEmail
} from '../actions.js'

const initialState = {
  name: null,
  email: null,
  credits: null,
  stateaccount: null,
  avatar: null,
  delete: null,
  verified: null,
  lastname: null,
  location: null,
  date: null,
  loading: null,
  error: null,
  preview: null
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
      const { name, userName, email } = action.payload
      state.name = name
      state.userName = userName
      state.email = email
    },
    changeEmail: (state, action) => {
      state.email = action.payload
    },
    setErrorNull: (state, action) => {
      state.error = null
    },
    setLoadingNull: (state, action) => {
      state.loading = null
    },
    setUserNull: (state, action) => {
      state.name = null
      state.email = null
      state.credits = null
      state.stateaccount = null
      state.avatar = null
      state.delete = null
      state.verified = null
      state.lastname = null
      state.location = null
      state.date = null
      state.loading = null
      state.error = null
      state.preview = null
    },
    setPreview: (state, action) => {
      state.preview = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegister.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchRegister.fulfilled, (state, action) => {
        console.log(action.payload, 'esto es action.payload register')
        if (action.payload.error) {
          state.error = action.payload.error
          state.loading = false
        } else {
          state.loading = false
          state.location = action.payload.location
          state.name = action.payload.name
          state.email = action.payload.email
          state.credits = action.payload.credits
          state.stateaccount = action.payload.stateaccount
          state.avatar = action.payload.avatar
          state.delete = action.payload.delete
          state.verified = action.payload.verified
          state.lastname = action.payload.lastname
          state.date = action.payload.date
        }
      })
      .addCase(fetchRegister.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })

      // Login Fetch
      .addCase(fetchLogin.pending, (state) => {
        console.log(state, 'entro en fetchLogin.pending')
        state.loading = true
      })
      .addCase(fetchLogin.fulfilled, (state, action) => {
        console.log(state.user, action, 'entro en fetchLogin.fulldilled')
        if (action.payload.error) {
          state.error = action.payload.error
          state.loading = false
        } else {
          state.loading = false
          state.name = action.payload.name
          state.email = action.payload.email
          state.credits = action.payload.credits
          state.stateaccount = action.payload.stateaccount
          state.avatar = action.payload.avatar
          state.delete = action.payload.delete
          state.verified = action.payload.verified
          state.lastname = action.payload.lastname
          state.location = action.payload.location
          state.date = action.payload.date
        }
      })
      .addCase(fetchLogin.rejected, (state, action) => {
        console.log(state, action, 'entro en fetchLogin.rejected')
        state.loading = false
        state.error = action.error.message
      })

      // Verify Fetch
      .addCase(fetchVerifiedEmail.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchVerifiedEmail.fulfilled, (state, action) => {
        // console.log('entro a fulfilerd')
        // state.loading = false
        // state.verified = action.payload.verified
        // state.error = action.payload.error
        if (action.payload.error) {
          state.error = action.payload.error
          state.loading = false
        } else {
          state.loading = false
          state.name = action.payload.name
          state.email = action.payload.email
          state.credits = action.payload.credits
          state.stateaccount = action.payload.stateaccount
          state.avatar = action.payload.avatar
          state.delete = action.payload.delete
          state.verified = action.payload.verified
          state.lastname = action.payload.lastname
          state.location = action.payload.location
          state.date = action.payload.date
        }
      })
      .addCase(fetchVerifiedEmail.rejected, (state, action) => {
        console.log('entro a rechazado?')
        state.loading = false
        state.error = action.error.message
      })
  }
})

// La funcion "createSlice" de redux-toolkit, crea 2 propiedades dentro de "userSlice"
// estas propieades son ".actions" y ".reducer"
export const { addUser, changeEmail, setErrorNull, setUserNull, setLoadingNull, setPreview } = userSlice.actions
export default userSlice.reducer // esto es el userReducer usado en el archivo store.js
