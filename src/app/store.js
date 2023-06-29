import { configureStore } from '@reduxjs/toolkit'
import sneakersReducer from '../features/Sneakers/sneakersSlice'

const store = configureStore({
  reducer: {
    sneakers: sneakersReducer,
  },
})

export default store