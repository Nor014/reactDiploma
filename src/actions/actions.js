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

export const fetchData = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(response.statusText);
  }
  return await response.json();
}
