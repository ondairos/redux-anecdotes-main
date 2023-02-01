import React from 'react'
import ReactDOM from 'react-dom/client'
// import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import reducer from './reducers/anecdoteReducer'
import filterReducer from './reducers/filterReducer'
import { configureStore } from '@reduxjs/toolkit'

// config reduxjs/toolkit
const store = configureStore({
  reducer: {
    anecdotes: reducer,
    filter: filterReducer
  }
})


console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
