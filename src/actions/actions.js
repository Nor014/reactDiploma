// SalesHits

export function loadHits() {
  return {
    type: 'LOAD_HITS',
    payload: {
      url: 'http://localhost:7070/api/top-sales',
      fromComponent: 'SalesHits'
    }
  }
}

export function setHits(data) {
  return {
    type: 'SET_HITS',
    payload: data
  }
}

// Catalog

export function catalogLoad(url) {
  return {
    type: 'CATALOG_LOAD',
    payload: {
      url: url,
      fromComponent: 'Catalog'
    }
  }
}

export function setCatalog(data) {
  return {
    type: 'SET_CATALOG',
    payload: data
  }
}

export function setCatalogAndDisable(data) {
  return {
    type: 'SET_CATALOG_AND_DISABLE',
    payload: data
  }
}

// CatalogNav

export function catalogNavLoad(url) {
  return {
    type: 'CATALOG_NAV_LOAD',
    payload: {
      url: url,
      fromComponent: 'CatalogNav'
    }
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

// LoadMore

export function loadMoreForCategory(url) {
  return {
    type: 'LOAD_MORE_FOR_CATEGORY',
    payload: {
      url: url,
      fromComponent: 'LoadMore'
    }
  }
}

export function setMoreForCategory(data) {
  return {
    type: 'SET_MORE_FOR_CATEGORY',
    payload: data
  }
}

export function setMoreForCategoryAndDisable(data) {
  return {
    type: 'SET_MORE_FOR_CATEGORY_AND_DISABLE',
    payload: data
  }
}

// search

export function setSearchValue(value) {
  return {
    type: 'SET_SEARCH_VALUE',
    payload: value
  }
}

// product

export function loadProduct(url) {
  return {
    type: 'LOAD_PRODUCT',
    payload: {
      url: url,
      fromComponent: 'Product'
    }
  }
}

export function setProduct(data) {
  return {
    type: 'SET_PRODUCT',
    payload: data
  }
}

export function changeCheckbox(size) {
  return {
    type: 'CHANGE_CHECKBOX',
    payload: size
  }
}

export function amountPlusOne() {
  return {
    type: 'AMOUNT_PLUS_ONE'
  }
}

export function amountMinusOne() {
  return {
    type: 'AMOUNT_MINUS_ONE'
  }
}

// Cart

export function addToCart(product) {
  return {
    type: 'ADD_TO_CART',
    payload: product
  }
}

export function deleteFromCart(id) {
  return {
    type: 'DELETE_FROM_CART',
    payload: id
  }
}

// Checkout

export function checkout(data, url) {
  return {
    type: 'CHECKOUT',
    payload: {
      data: data,
      url: url
    }
  }
}

export function checkoutSuccess() {
  return {
    type: 'CHECKOUT_SUCCESS'
  }
}

// Error

export function setError(error, fromComponent) {
  return {
    type: `SET_ERROR_${fromComponent.toUpperCase()}`,
    payload: error
  }
}


export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}

export const postData = async (data, url) => {
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return response;
}
