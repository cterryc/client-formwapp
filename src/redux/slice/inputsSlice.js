import { createSlice } from '@reduxjs/toolkit'
import { getInputsFromByUserId, /* getInputsFromDb */ postNewForm } from '../inputsActions.js'

const initialState = {
  preview: [],
  inputsSave: null
}

export const inputsSlice = createSlice({
  name: 'inputs',
  initialState,
  loading: false,
  reducers: {
    setPreviewInputs: (state, action) => {
      state.preview = action.payload
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postNewForm.pending, (state) => {
        state.loading = true
      })
      .addCase(postNewForm.fulfilled, (state, action) => {
        state.inputsSave = action.payload
        state.loading = true
      })
      .addCase(postNewForm.rejected, (state, action) => {
        state.loading = false
        console.log(action.payload)
        state.error = action.error.message
      })
      .addCase(getInputsFromByUserId.pending, (state) => {
        state.loading = true
      })
      .addCase(getInputsFromByUserId.fulfilled, (state, action) => {
        state.inputsSave = action.payload
        state.loading = true
      })
      .addCase(getInputsFromByUserId.rejected, (state, action) => {
        state.loading = false
        console.log(action.payload)
        state.error = action.error.message
      })
  }
})

// La funcion "createSlice" de redux-toolkit, crea 2 propiedades dentro de "userSlice"
// estas propieades son ".actions" y ".reducer"
export const { setPreviewInputs } = inputsSlice.actions
export default inputsSlice.reducer // esto es el userReducer usado en el archivo store.js
