const initState = {
  hits: [],
  loading: false,
  error: null
}

export default function hitsReducer(state = initState, action) {
  if (action.type === 'LOAD_HITS') {
    return { ...state, loading: true, hits: [], error: null }
  }

  if (action.type === 'SET_HITS') {
    return { ...state, loading: false, error: null, hits: action.payload }
  }

  if (action.type === "SET_ERROR_SALESHITS") {
    return { ...state, loading: false, hits: [], error: action.payload }
  }

  return state
}