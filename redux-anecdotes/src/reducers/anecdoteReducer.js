const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch (action.type) {
    case 'VOTE':
      const { id } = action.data
      const newState = state.map(anecdote => anecdote.id === id ? { ...anecdote, votes: anecdote.votes + 1 } : anecdote)
      return newState
    case 'CREATE':
      const { content } = action.data
      return state.concat(asObject(content))
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

const create = (content) => {
  return {
    type: 'CREATE',
    data: { content }
  }
}

export default reducer
export { vote, create }