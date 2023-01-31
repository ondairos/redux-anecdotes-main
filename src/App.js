import NewAnecdote from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {



  return (
    <div>
      <h2>Anecdotes</h2>
      <NewAnecdote />
      <br></br>
      <hr></hr>
      <AnecdoteList />
      <hr></hr>
    </div>
  )
}

export default App