import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { useDispatch } from 'react-redux'
import Filter from './components/Filter'
import { useEffect } from 'react'
import Notification from './components/Notification'
import { initializedAnecdotes } from './reducers/anecdoteReducer'

const App = () => {

  const dispatch = useDispatch()

  //useEffect hook  toinitialize the anecdotes into the App -WE HIDE THIS with Redux Thunk-
  // useEffect(() => {
  //   anecdoteService.getAll()
  //     .then(anecdotes => dispatch(setAnecdotes(anecdotes)))
  // }, [dispatch])

  // Redux Thunk
  useEffect(() => {
    dispatch(initializedAnecdotes())
  }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <NewAnecdote />
      <Notification />
      <br></br>
      <Filter />
      <hr></hr>
      <AnecdoteList />
      <hr></hr>
    </div>
  )
}

export default App