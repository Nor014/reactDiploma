const initState = {
  items: [],
  loading: false,
  error: null
}

export default function catalogReducer(state = initState, action) {
  if (action.type === 'CATALOG_LOAD') {
    return { ...state, loading: true, items: [], error: null }
  }

  if (action.type === 'SET_CATALOG' || action.type === 'SET_CATALOG_AND_DISABLE') {
    return { ...state, loading: false, items: action.payload }
  }

  if (action.type === 'SET_MORE_FOR_CATEGORY' || action.type === 'SET_MORE_FOR_CATEGORY_AND_DISABLE') {
    let data = [].concat(state.items)
    action.payload.forEach(el => data.push(el))

    console.log(action.payload)
    return { ...state, loading: false, items: data }
  }

  if (action.type === 'SET_ERROR_CATALOG') {
    return { ...state, error: action.payload, items: [], loading: false }
  }

  return state
}