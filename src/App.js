import { useSelector, useDispatch } from 'react-redux'
import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import { increaseVote } from './reducers/anecdoteReducer'

const App = () => {



  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <h2>create new</h2>
      <NewAnecdote />
    </div>
  )
}

export default App