import { createSlice } from '@reduxjs/toolkit'


const initialState = {
    message: 'Hello, this is your initial notification.',
    error: 'error here'
}

const notificationSlice = createSlice({
    name: 'notifications',
    initialState,
    reducers: {
        createNotification: (state, action) => {
            state.message = action.payload
        },
        clearNotification(state, action) {
            state.message = ''
        }
    }
})


export const { createNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer