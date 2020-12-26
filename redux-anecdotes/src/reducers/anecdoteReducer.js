const getId = () => (100000 * Math.random()).toFixed(0)

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const { id } = action.data
      const newState = state.map(anecdote => anecdote.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote)
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

const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

const create = (anecdoteObj) => {
  return {
    type: 'CREATE',
    data: anecdoteObj
  }
}

const initializeAnecdotes = (anecdotes) => {
  return {
    type: 'INIT_ANECDOTES',
    data: anecdotes,
  }
}

export default reducer
export { vote, create, initializeAnecdotes }