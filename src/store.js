import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'
import notificationReducer from './reducers/notificationReducer'

// config reduxjs/toolkit
const store = configureStore({
    reducer: {
        anecdotes: reducer,
        filter: filterReducer,
        notification: notificationReducer
    }
})

export default store