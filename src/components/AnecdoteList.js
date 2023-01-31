import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state)
    const dispatch = useDispatch()

    //increase vote function using dispatch and reducer helper function increaseVote
    const vote = (id) => {
        dispatch(increaseVote(id))
    }


    //anecdotes order by votes
    const orderedByVotesAnectdotes = anecdotes.sort((a, b) => b.votes - a.votes)

    return (
        <div>        {
            orderedByVotesAnectdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )
        }
        </div>

    )
}

export default AnecdoteList