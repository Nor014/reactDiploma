const initState = {
  loading: false,
  error: null,
  disabled: false
}

export default function loadMoreReducer(state = initState, action) {
  if (action.type === 'LOAD_MORE_FOR_CATEGORY') {
    return { ...state, loading: true, error: null }
  }

  if (action.type === 'SET_MORE_FOR_CATEGORY') {
    return { ...state, loading: false, error: null }
  }

  if (action.type === 'SET_MORE_FOR_CATEGORY_AND_DISABLE') {
    return { ...state, loading: false, error: null, disabled: true }
  }

  if (action.type === 'LOAD_NEW_CATEGORY') {
    return { ...state, loading: false, error: null, disabled: false }
  }

  return state
}