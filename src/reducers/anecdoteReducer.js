import { createSlice } from '@reduxjs/toolkit'

// const anecdotesAtStart = [
//   'If it hurts, do it more often',
//   'Adding manpower to a late software project makes it later!',
//   'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
//   'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
//   'Premature optimization is the root of all evil.',
//   'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
// ]

const getId = () => (100000 * Math.random()).toFixed(0)

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

// create slice with @reduxjs/toolkit
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  //initialize with empty array for json server import
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      const content = action.payload
      state.push({
        content,
        id: getId(),
        votes: 0,
      })
    },
    increaseVote(state, action) {
      const id = action.payload
      const anecdoteToChange = state.find(anect => anect.id === id)
      const changedAnectode = {
        ...anecdoteToChange, votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnectode)
    },
    //append anectodes to app
    apendAnectode(state, action) {
      state.push(action.payload)
    },
    // Dispatching multiple actions seems a bit impractical. add an action creator setNotes which can be used to directly replace the notes array.
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})


// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'NEW_ANECDOTE':
//       return [...state, action.payload]
//     case 'VOTE_ME':
//       const id = action.payload.id
//       const  anecdoteToChange= state.find(anect => anect.id === id)
//       const changedAnectode = {
//         ...anecdoteToChange,
//         votes: anecdoteToChange.votes + 1
//       }
//       return state.map(anecdote => anecdote.id !== id ? anecdote : changedAnectode)

//     default:
//       return state
//   }
// }

// export const increaseVote = (id) => {
//   return {
//     type: 'VOTE_ME',
//     payload: { id }
//   }
// }

// export const createAnecdote = (content) => {
//   return {
//     type: 'NEW_ANECDOTE',
//     payload: {
//       content,
//       id: getId(),
//       votes: 0
//     }
//   }
// }

export const { createAnecdote, increaseVote, apendAnectode, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer