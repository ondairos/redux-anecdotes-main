# Redux-Anecdotes
A React web application that uses Redux to manage the state of anecdotes and their votes.

## Description

The application allows you to create and manage anecdotes, as well as view them sorted by the number of votes.

The state management is done with Redux, and it includes two parts:

    Reducers: Handle the changes to the state, such as creating a new anecdote, voting for an anecdote, or filtering anecdotes.
    Actions: Dispatch events that trigger the changes in the state.

The main components are:

    AnecdoteForm: Allows you to create new anecdotes
    AnecdoteList: Displays a list of anecdotes ordered by the number of votes
    Filter: Lets you filter anecdotes by keyword
    Notification: Displays a notification when an anecdote has been voted for

The App component uses the useEffect hook to initialize the anecdotes from the server when the component is first rendered. The data is fetched using axios, and the dispatch action initializedAnecdotes is used to populate the Redux store with the anecdotes.

The AnecdoteList component uses the useSelector hook from the react-redux library to get the anecdotes from the Redux store, and the useDispatch hook to dispatch the increaseVote action when an anecdote is voted for. The vote is also accompanied by a notification displayed through the Notification component.


## Development server
To run the development server, run `npm start` in the terminal.

## Testing
To run tests, run `npm test` in the terminal.

## Deployment
To build the application for deployment, run `npm build` in the terminal.

## Built With
- React
- Redux
- Axios
- json-server

## Author
Ioannis Kantiloros

