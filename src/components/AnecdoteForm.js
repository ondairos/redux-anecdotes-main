import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { createNotification, clearNotification } from '../reducers/notificationReducer'


const NewAnecdote = () => {
    const dispatch = useDispatch()

    //add new anecdote function
    const addAnecdote = (event) => {
        event.preventDefault()
        const anecdoteContent = event.target.anecdoteName.value
        event.target.anecdoteName.value = ''
        dispatch(createAnecdote(anecdoteContent))
        dispatch(createNotification(anecdoteContent))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
    }


    return (
        <>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdoteName' /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )

}

export default NewAnecdote