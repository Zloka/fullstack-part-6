const initialState = null

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_NOTIFICATION':
      const { notification } = action.data
      return notification
    default:
      break
  }

  return state
}

export default reducer
