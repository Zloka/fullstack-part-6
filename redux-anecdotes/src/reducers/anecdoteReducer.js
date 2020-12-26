import anecdoteService from '../services/anecdotes'

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const anecdote = action.data
      const newState = state.map(existingAnecdote => existingAnecdote.id === anecdote.id ? anecdote : existingAnecdote)
      return newState
    case 'CREATE':
      return state.concat(action.data)
    case 'INIT_ANECDOTES':
      return action.data
    default:
      break
  }

  return state
}

const vote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.update({ ...anecdote, votes: anecdote.votes + 1 })
    dispatch({
      type: 'VOTE',
      data: newAnecdote
    })
  }
}

const create = (content) => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create({ content, votes: 0})
    dispatch({
      type: 'CREATE',
      data: newAnecdote
    })
  }
}

const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes,
    })
  }
}

export default reducer
export { vote, create, initializeAnecdotes }