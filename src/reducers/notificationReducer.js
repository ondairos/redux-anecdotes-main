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
            state.message = `Anecdote: ${action.payload} created!`
        },
        notifyLike: (state,action) => {
            state.message = `You voted the anecdote: ${action.payload}`
        }
        ,
        clearNotification(state, action) {
            state.message = ''
        }
    }
})


export const { createNotification, clearNotification, notifyLike } = notificationSlice.actions
export default notificationSlice.reducer