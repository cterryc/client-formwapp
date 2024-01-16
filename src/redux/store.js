import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice.js'
import inputsReducer from './slice/inputsSlice.js'

import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import thunk from 'redux-thunk'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['userState', 'inputsState']
}

const rootReducer = combineReducers({
  userState: userReducer,
  inputsState: inputsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

// const store = configureStore({
//   reducer: {
//     user: persistedReducer
//   },
//   middleware: [thunk]
// })

// const persistConfig2 = {
//   key: 'root',
//   storage,
//   whitelist: ['inputState']
// }

// const rootReducer2 = combineReducers({
//   inputState: inputsReducer
// })

// const persistedReducer2 = persistReducer(persistConfig2, rootReducer2)

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk]
})

export default store
