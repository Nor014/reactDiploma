const initState = {
  data: '',
  avaliableSizes: [],
  amount: 1,
  loading: false,
  error: null
}

export default function productReducer(state = initState, action) {
  if (action.type === 'LOAD_PRODUCT') {
    return { ...state, loading: true }
  }

  if (action.type === 'SET_PRODUCT') {
    const data = action.payload;

    const avaliableSizes = data.sizes.filter(el => el.avalible).map(el => {
      el.checked = false;
      return el
    })

    return { ...state, loading: false, error: null, data: data, avaliableSizes: avaliableSizes, amount: 1 }
  }

  if (action.type === 'CHANGE_CHECKBOX') {
    const avaliableSizes = state.avaliableSizes.map(el => {
      if (el.size === action.payload) {
        el.checked = !el.checked
      } else {
        el.checked = false
      }

      return el
    })

    return { ...state, avaliableSizes: avaliableSizes }
  }

  if (action.type === 'AMOUNT_PLUS_ONE') {
    const amount = state.amount + 1;
    return { ...state, amount: amount }
  }

  if (action.type === 'AMOUNT_MINUS_ONE') {
    const amount = state.amount - 1;
    return { ...state, amount: amount }
  }

  return state
}