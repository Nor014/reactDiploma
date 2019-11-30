const initState = {
  items: [],
  loading: false,
  error: null
}

export default function cartReducer(state = initState, action) {
  if (action.type === 'ADD_TO_CART') {
    const items = [].concat(state.items)
    items.push(action.payload)

    return { ...state, items: items }
  }

  if (action.type === 'DELETE_FROM_CART') {
    const items = [].concat(state.items).filter(el => el.id !== action.payload);
    return { ...state, items: items }
  }

  return state
}

