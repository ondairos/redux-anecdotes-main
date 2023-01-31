# Anecdotes

A React app to display and create anecdotes using Redux for state management.

## Usage

- Clone this repository to your local machine
- Run `npm install` to install dependencies
- Run `npm start` to start the development server

## App components

- `App`: Renders the main layout of the app and displays the `NewAnecdote` and `AnecdoteList` components.
- `NewAnecdote`: A form to create new anecdotes with a dispatch action to add it to the store.
- `AnecdoteList`: A list of anecdotes sorted by the number of votes, with a vote button to increase its votes.

## Redux

The state of this app is managed by Redux with these actions and reducer functions:

- `increaseVote`: Action to increase the votes of an anecdote by its id.
- `createAnecdote`: Action to create a new anecdote with the content provided.
- `reducer`: The main reducer function to handle the state updates with these actions.

## Notes

- This app has a hardcoded list of anecdotes at start in `anecdotesAtStart` constant.
- The ids of the anecdotes are generated randomly with the `getId` function.
