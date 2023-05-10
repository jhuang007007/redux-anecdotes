import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setNotification(state, action) {
      state = action.payload
      return state
    },
    removeNotification(state) {
      state = null
      return state
    }
  }
})

export const { setNotification, removeNotification } = notificationSlice.actions
export default notificationSlice.reducer
