const initState = {
  nav: [],
  navLoading: false,
  navError: null
}

export default function catalogReducer(state = initState, action) {
  if (action.type === 'CATALOG_NAV_LOAD') {
    return { ...state, navLoading: true, nav: [], navError: null }
  }

  if (action.type === 'SET_CATALOG_NAV') {
    const data = [].concat(action.payload);
    data.forEach(el => el.active = false);
    data.unshift({ id: 'All', title: 'Все', active: true })

    return { ...state, navLoading: false, nav: data }
  }

  if (action.type === 'CHANGE_CATALOG_NAV') {
    const data = state.nav.map(el => {
      el.active = el.id === action.payload ? true : false
      return el
    })

    return { ...state, navLoading: false, nav: data }
  }

  if (action.type === 'SET_ERROR_CATALOGNAV') {
    return { ...state, navLoading: false, navError: action.payload, nav: [] }
  }

  return state
}