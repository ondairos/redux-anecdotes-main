import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
// import { useDispatch } from 'react-redux'
import Filter from './components/Filter'
// import { useEffect } from 'react'

const App = () => {

  // const dispatch = useDispatch()

  // useEffect(() => {
  //   anecdoteService.getAll().then(blogs => dispatch(setAnecdotes(blogs)))
  // }, [dispatch])

  return (
    <div>
      <h2>Anecdotes</h2>
      <NewAnecdote />
      <br></br>
      <Filter />
      <hr></hr>
      <AnecdoteList />
      <hr></hr>
    </div>
  )
}

export default App