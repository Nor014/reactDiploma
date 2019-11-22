import { spawn, take, put, fork, call } from 'redux-saga/effects';
import { fetchData, setHits } from '../actions/actions'

// function* getDataSaga(action) {
//   try {
//     const data = yield call(searchService, action.payload)
//     yield action.payload ? put(setDetails(data)) : put(setList(data))
//   } catch (error) {
//     yield action.payload ? put(setDetailsError(error.message)) : put(setError(error.message))
//   }
// }

// function* listWatchSaga() {
//   while (true) {
//     const action = yield take('GET_LIST')
//     yield fork(getDataSaga, action)
//   }
// }

// function* detailsWatchSaga() {
//   while (true) {
//     const action = yield take('GET_DETAILS')
//     yield fork(getDataSaga, action)
//   }
// }

// export default function* saga() {
//   yield spawn(listWatchSaga)
//   yield spawn(detailsWatchSaga)
// }

function* getDataSaga(action) {
  try {
    const url = action.payload;
    const data = yield call(fetchData, url);
    yield put(setHits(data))
  } catch (error) {
   
  }
}

function* salesHitsWatcherSaga() {
  while (true) {
    const action = yield take('LOAD_HITS')
    yield fork(getDataSaga, action)
  }
}

export default function* saga() {
  yield spawn(salesHitsWatcherSaga)
}