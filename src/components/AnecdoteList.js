import { useSelector, useDispatch } from 'react-redux'
import { increaseVote } from '../reducers/anecdoteReducer'
import { notifyLike, clearNotification } from '../reducers/notificationReducer'

const AnecdoteList = () => {
    // using the combined reducer use: state.blogs
    // const anecdotes = useSelector(state => state.blogs)
    const dispatch = useDispatch()
    const anecdotesRedux = useSelector(({ filter, anecdotes }) => {
        let result = anecdotes
        if (filter === 'ALL') {
            return anecdotes
        } else if (filter === 'NONE') {
            return [...[]]
        } else {
            //method to filter out elements from the "anecdotes" array that don't match the current "filter" value. checks if the "content" property of each element in the array includes the "filter" value. The filtered elements that match the condition are stored in the "result" variable, which will only contain the elements from the "anecdotes" array that have a "content" property that includes the "filter" value.
            result = anecdotes.filter(element => element.content.includes(filter))
            return result
        }
    })


    //increase vote function using dispatch and reducer helper function increaseVote
    const vote = (anecdote) => {
        dispatch(increaseVote(anecdote))
        dispatch(notifyLike(anecdote.content ))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
    }


    //anecdotes order by votes
    // spread new anecdote array because anecdotes is readonly from useSelector Redux
    const orderedByVotesAnectdotes = [...anecdotesRedux].sort((a, b) => b.votes - a.votes)


    return (
        <div>        {
            orderedByVotesAnectdotes.map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )
        }
        </div>

    )
}

export default AnecdoteList