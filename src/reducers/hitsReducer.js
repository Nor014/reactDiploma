const initState = {
  hits: [],
  loading: false,
  error: null
}

export default function hitsReducer(state = initState, action) {
  if (action.type === 'LOAD_HITS') {
    return { ...state, loading: true,  hits: []}
  }

  if (action.type === 'SET_HITS') {
    return { ...state, loading: false, error: null, hits: action.payload }
  }

  return state
}