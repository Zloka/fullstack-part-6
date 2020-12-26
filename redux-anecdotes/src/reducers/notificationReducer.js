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

const setNotification = (notification, time) => {
  return async dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      data: { notification }
    })
    setTimeout(() => {
      dispatch({
        type: 'SET_NOTIFICATION',
        data: { notification: null }
      })
    }, time * 1000)
  }
}

export default reducer
export { setNotification }
