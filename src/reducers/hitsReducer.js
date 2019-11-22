const initState = {
  hits: [],
  loading: false,
  error: null
}

export default function hitsReducer(state = initState, action) {
  if (action.type === 'LOAD_HITS') {
    return { ...state, loading: true }
  }

  if (action.type === 'SET_HITS') {
    console.log(action)
    return { ...state, loading: false, error: null, hits: action.payload }
  }

  return state
}