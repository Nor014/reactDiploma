export function loadHits() {
  return {
    type: 'LOAD_HITS',
    payload: 'http://localhost:7070/api/top-sales'
  }
}

export function setHits(data) {
  return {
    type: 'SET_HITS',
    payload: data
  }
}

export function catalogLoad(url) {
  return {
    type: 'CATALOG_LOAD',
    payload: url
  }
}

export function setCatalog(data) {
  return {
    type: 'SET_CATALOG',
    payload: data
  }
}

export function catalogNavLoad(url) {
  return {
    type: 'CATALOG_NAV_LOAD',
    payload: url
  }
}

export function setCatalogNav(data) {
  return {
    type: 'SET_CATALOG_NAV',
    payload: data
  }
}

export function changeCatalogNav(id) {
  return {
    type: 'CHANGE_CATALOG_NAV',
    payload: id
  }
}

export function loadNewCategory(url) {
  return {
    type: 'LOAD_NEW_CATEGORY',
    payload: url
  }
}

export function setNewCategory(data) {
  return {
    type: 'SET_NEW_CATEGORY',
    payload: data
  }
}

export function loadMoreForCategory(url) {
  return {
    type: 'LOAD_MORE_FOR_CATEGORY',
    payload: url
  }
}

export function setMoreForCategory(url) {
  return {
    type: 'SET_MORE_FOR_CATEGORY',
    payload: url
  }
}

export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
