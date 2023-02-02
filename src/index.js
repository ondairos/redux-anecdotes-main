import React from 'react'
import ReactDOM from 'react-dom/client'
// import { combineReducers, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './App'
import store from './store'
import anecdoteService from './services/anecdotes'
import { setAnecdotes } from './reducers/anecdoteReducer'

console.log(store.getState())

//populate the state/store with all the anecdotes from db.json
// console.log(anecdoteService.getAll());
// Await only works inside async functions, and the code in index.js is not inside a function.
anecdoteService.getAll().then(anecdotes => store.dispatch(setAnecdotes(anecdotes)))

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)
