const initState = {
  success: false,
  loading: false,
  error: null
}

export default function checkoutReducer(state = initState, action) {
  if (action.type === 'CHECKOUT') {
    return { ...state, loading: true, error: null, success: false }
  }

  if (action.type === 'CHECKOUT_SUCCESS') {
    return { ...state, loading: false, error: null, success: true }
  }

  if (action.type === 'ADD_TO_CART') {
    return { ...state, loading: false, error: null, success: false }
  }

  return state
}