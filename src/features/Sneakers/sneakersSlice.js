import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  sneakersColor: 'black-red',
  sneakersSize: '',
}

const sneakers = createSlice({
  name: 'sneakers',
  initialState,
  reducers: {
    setSneakersColor: (state, action) => {
      state.sneakersColor = action.payload
    },
    setSneakersSize: (state, action) => {
      state.sneakersSize = action.payload
    },
  }
})

export default sneakers.reducer
export const { setSneakersColor, setSneakersSize } = sneakers.actions