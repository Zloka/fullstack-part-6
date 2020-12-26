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

const setNotification = (notification) => {
  return {
    type: 'SET_NOTIFICATION',
    data: { notification }
  }
}

const removeNotification = () => {
  return {
    type: 'SET_NOTIFICATION',
    data: { notification: null }
  }
}

export default reducer
export { setNotification, removeNotification }
