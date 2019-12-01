const initState = localStorage.getItem('products')
  ? {
    items: JSON.parse(localStorage.getItem("products")),
    loading: false,
    error: null
  }
  : {
    items: [],
    loading: false,
    error: null
  }

export default function cartReducer(state = initState, action) {
  if (action.type === 'ADD_TO_CART') {
    const items = [].concat(state.items);
    const samePosition = items.find(el => el.name === action.payload.name && el.size === action.payload.size);

    if (samePosition) {
      samePosition.amount += action.payload.amount
    } else {
      items.push(action.payload)
    }

    localStorage.setItem('products', JSON.stringify(items))

    return { ...state, items: items }
  }

  if (action.type === 'DELETE_FROM_CART') {
    const items = [].concat(state.items).filter(el => el.id !== action.payload);
    localStorage.setItem('products', JSON.stringify(items))
    return { ...state, items: items }
  }

  return state
}

