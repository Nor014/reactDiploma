const initState = {
  value: ''
}

export default function searchReducer(state = initState, action) {
  if (action.type === 'SET_SEARCH_VALUE') {
    return { ...state, value: action.payload }
  }

  if (action.type === 'CHANGE_CATALOG_NAV') {
    return { ...state, value: '' }
  }

  return state
}