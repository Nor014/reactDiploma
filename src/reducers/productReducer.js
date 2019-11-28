const initState = {
  data: {},
  loading: false,
  error: null
}

export default function productReducer(state = initState, action) {
  if (action.type === 'LOAD_PRODUCT') {
    return { ...state, loading: true }
  }
  
  return state
}