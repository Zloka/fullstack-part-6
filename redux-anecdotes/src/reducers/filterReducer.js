const initialState = ''

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_FILTER':
      const { filter } = action.data
      return filter
    default:
      break
  }

  return state
}

const setFilter = (filter) => {
  return {
    type: 'SET_FILTER',
    data: { filter }
  }
}

export default reducer
export { setFilter }
