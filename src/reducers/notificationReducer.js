import { createSlice } from "@reduxjs/toolkit"

const initialState = null

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    clearNotification(state) {
      state = null
      return state
    }
  }
})

export const setNotification = (message, timeout) => {
  return dispatch => {
    dispatch(setMessage(message)) 
    setTimeout(() => {
      dispatch(clearNotification())
    }, timeout*1000);
  }
}

export const { clearNotification, setMessage } = notificationSlice.actions
export default notificationSlice.reducer
