import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'


const NewAnecdote = () => {
    const dispatch = useDispatch()

    //add new anecdote function
    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.anecdoteName.value
        event.target.anecdoteName.value = ''
        dispatch(createAnecdote(anecdoteContent))
    }


    return (
        <form onSubmit={addAnecdote}>
            <div><input name='anecdoteName' /></div>
            <button type='submit'>create</button>
        </form>
    )

}

export default NewAnecdote