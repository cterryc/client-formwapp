import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  preview: []
}

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  reducers: {
    setPreviewInputs: (state, action) => {
      state.preview = action.payload
    }
  }
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchRegister.pending, (state) => {
  //       state.loading = true
  //     })
  //     .addCase(fetchRegister.fulfilled, (state, action) => {
  //       console.log(action.payload, 'esto es action.payload register')
  //       if (action.payload.error) {
  //         state.error = action.payload.error
  //         state.loading = false
  //       } else {
  //         state.loading = false
  //         state.location = action.payload.location
  //         state.name = action.payload.name
  //         state.email = action.payload.email
  //         state.credits = action.payload.credits
  //         state.stateaccount = action.payload.stateaccount
  //         state.avatar = action.payload.avatar
  //         state.delete = action.payload.delete
  //         state.verified = action.payload.verified
  //         state.lastname = action.payload.lastname
  //         state.date = action.payload.date
  //       }
  //     })
  //     .addCase(fetchRegister.rejected, (state, action) => {
  //       state.loading = false
  //       state.error = action.error.message
  //     })
  // }
})

// La funcion "createSlice" de redux-toolkit, crea 2 propiedades dentro de "userSlice"
// estas propieades son ".actions" y ".reducer"
export const { setPreviewInputs } = inputsSlice.actions
export default inputsSlice.reducer // esto es el userReducer usado en el archivo store.js
