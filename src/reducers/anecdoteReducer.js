import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

// create slice with @reduxjs/toolkit
const anecdoteSlice = createSlice({
  name: 'anecdotes',
  //initialize with empty array for json server import
  initialState: [],
  reducers: {
    appendVote(state, action) {
      return state.map(anecdote => {
        if (anecdote.id === action.payload.id) {
          return {
            ...anecdote,
            votes: anecdote.votes + 1
          };
        }
        return anecdote;
      });
    },
    //append anectodes to app
    apendAnectode(state, action) {
      state.push(action.payload)
    },
    // Dispatching multiple actions seems a bit impractical. add an action creator setNotes which can be used to directly replace the notes array.
    setAnecdotes(state, action) {
      return action.payload
    },
    removeAnecdote(state, action) {
      return state.filter(anecdote => anecdote !== action.payload);
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

export const { apendAnectode, setAnecdotes, appendVote, removeAnecdote } = anecdoteSlice.actions

// In the inner function, meaning the asynchronous action, the operation first fetches all the notes from the server and then dispatches the setNotes action, which adds them to the store.
export const initializedAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

// an asynchronous operation is executed, after which the action changing the state of the store is dispatched.
export const createAnecdote = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(content)
    dispatch(apendAnectode(newAnecdote))
  }
}

// export const increaseVote = (object) => {
//   return async dispatch => {
//     const updatedAnecdote = await anecdotesService.updateAnecdote(object)
//     dispatch(updatedAnecdote)
//   }
// }

export const increaseVote = (object) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdotesService.updateAnecdote(object);
    // dispatch({
    //   type: "UPDATE_ANECDOTE",
    //   data: updatedAnecdote,
    // });
    dispatch(appendVote(updatedAnecdote))
  };
};

export const deleteAnecdote = (object) => {
  return async (dispatch) => {
    const deletedAnecdote = await anecdotesService.deleteAnecdoteServer(object)
    dispatch(removeAnecdote(deletedAnecdote))
  }
}

export default anecdoteSlice.reducer