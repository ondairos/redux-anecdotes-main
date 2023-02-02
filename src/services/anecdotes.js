import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

//get all the anecdotes from db.json file using axios.get
const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

// randomize id for new anecdote
const getId = () => (100000 * Math.random()).toFixed(0)


//create new anecdote with axios.post
const createNew = async (content) => {
    const newAnecdoteObject = { content, id: getId(), votes: 0 }
    const response = await axios.post(baseUrl, newAnecdoteObject)
    return response.data
}

export default { getAll, createNew }
